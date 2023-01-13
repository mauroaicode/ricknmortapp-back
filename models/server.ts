import cors from 'cors';
import express, {Application} from 'express'
import characterRoutes from "../routes/comment.route";

import db from "../config/db-connection";

class Server{
    private app: Application;
    private port: string;
    private apiPaths = {
        characters: '/api/characters'
    }

    constructor() {
        console.log('PUERTO ', process.env.PORT )
        this.app = express();
        this.port = process.env.PORT || '8000';
        //Conexión Base de Datos
        this.dbConnection();
        //Middlewares
        this.middlewares()
        //Rutas de la app
        this.routes()
    }

   async dbConnection(){
        try{
            await db.authenticate();
            console.log('Database Online')
        }catch (error: any){

            throw new Error(error);
        }
    }

    middlewares(){
        //CORS
        this.app.use(cors({
            origin: '*'
        }));
        // this.app.use((req, res, next) => {
        //     res.header('Access-Control-Allow-Origin', '*');
        //     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        //     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        //     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        //     next();
        // });

        //BODY
        this.app.use(express.json());
        //PUBLIC FOLDER
    }

    routes() {
        this.app.use(this.apiPaths.characters, characterRoutes)
    }

    listen() {
        this.app.listen(this.port, () =>{
            console.log(`Server running on port ${this.port}`)
        })
    }
}

export default Server
