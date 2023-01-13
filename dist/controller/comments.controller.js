"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCommentToCharacter = exports.getCharacterCommentsCount = exports.getCharacterComments = void 0;
const comment_1 = __importDefault(require("../models/comment"));
const getCharacterComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const comments = yield comment_1.default.findAll({ where: { idCharacter: id } });
    if (comments) {
        res.json({ idCharacter: id, comments });
    }
    else {
        res.status(404).json({
            msg: `No hay comentarios para este personaje con el id ${id}.`
        });
    }
});
exports.getCharacterComments = getCharacterComments;
const getCharacterCommentsCount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const commentsCount = yield comment_1.default.count({ where: { idCharacter: id } });
    if (commentsCount) {
        res.json({ idCharacter: id, commentsCount });
    }
    else {
        res.status(404).json({
            msg: `No hay comentarios para este personaje con el id ${id}.`
        });
    }
});
exports.getCharacterCommentsCount = getCharacterCommentsCount;
const addCommentToCharacter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        // @ts-ignore
        const comment = new comment_1.default(body);
        yield comment.save();
        res.status(200).json({
            status: 'success',
            data: comment
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
exports.addCommentToCharacter = addCommentToCharacter;
//# sourceMappingURL=comments.controller.js.map