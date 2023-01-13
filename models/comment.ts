import {DataTypes} from "sequelize";
import db from "../config/db-connection";

const Comment = db.define('Comment', {
    idCharacter: {
        type: DataTypes.INTEGER
    },
    nameCharacter: {
        type: DataTypes.STRING
    },
    authorName: {
        type: DataTypes.STRING
    },
    comment: {
        type: DataTypes.TEXT
    },
})

export default Comment;
