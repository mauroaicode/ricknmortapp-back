"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const characters_controller_1 = require("../controller/characters.controller");
const router = (0, express_1.Router)();
router.get('/:id/comments', characters_controller_1.getCharacterComments);
router.post('/:id/comments', characters_controller_1.addCommentToCharacter);
exports.default = router;
//# sourceMappingURL=character.route.js.map