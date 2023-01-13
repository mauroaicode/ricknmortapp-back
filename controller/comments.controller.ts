import {Request, Response} from "express";

import Comment from "../models/comment";


export const getCharacterComments = async (req: Request, res: Response) =>{

    const {id} = req.params;
    const comments = await Comment.findAll({ where: { idCharacter: id} })

    if (comments){
        res.json({idCharacter: id,comments})
    }else{
        res.status(404).json({
            msg: `No hay comentarios para este personaje con el id ${id}.`
        })
    }
}

export const getCharacterCommentsCount = async (req: Request, res: Response) =>{
    const {id} = req.params;
    const commentsCount = await Comment.count({ where: { idCharacter: id} })
    if (commentsCount){
        res.json({idCharacter: id, commentsCount})
    }else{
        res.status(404).json({
            msg: `No hay comentarios para este personaje con el id ${id}.`
        })
    }
}

export const addCommentToCharacter = async (req: Request, res: Response) =>{
    const {body} = req;

    try{
        // @ts-ignore
        const comment = new Comment(body);
        await comment.save();
        res.status(200).json({
            status: 'success',
            data: comment
        })

    }catch (error: any){
        console.log(error);
        res.status(500).send(error)
    }
}


