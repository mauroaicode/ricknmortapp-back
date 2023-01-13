"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCommentToCharacter = exports.getCharacterComments = void 0;
const getCharacterComments = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getCharacterComments',
        id
    });
};
exports.getCharacterComments = getCharacterComments;
const addCommentToCharacter = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'postCharacterComments',
        id,
        body
    });
};
exports.addCommentToCharacter = addCommentToCharacter;
//# sourceMappingURL=characters.controller.js.map