"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comments_controller_1 = require("../controller/comments.controller");
const router = (0, express_1.Router)();
router.get('/:id/comments', comments_controller_1.getCharacterComments);
router.post('/:id/comments', comments_controller_1.addCommentToCharacter);
router.get('/:id/comments/count', comments_controller_1.getCharacterCommentsCount);
exports.default = router;
//# sourceMappingURL=comment.route.js.map