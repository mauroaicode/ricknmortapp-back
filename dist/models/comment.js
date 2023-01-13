"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_connection_1 = __importDefault(require("../config/db-connection"));
const Comment = db_connection_1.default.define('Comment', {
    idCharacter: {
        type: sequelize_1.DataTypes.INTEGER
    },
    nameCharacter: {
        type: sequelize_1.DataTypes.STRING
    },
    authorName: {
        type: sequelize_1.DataTypes.STRING
    },
    comment: {
        type: sequelize_1.DataTypes.TEXT
    },
});
exports.default = Comment;
//# sourceMappingURL=comment.js.map