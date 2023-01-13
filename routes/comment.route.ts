import {Router} from "express";
import {
    addCommentToCharacter,
    getCharacterComments,
    getCharacterCommentsCount
} from "../controller/comments.controller";

const router = Router();

router.get('/:id/comments', getCharacterComments);
router.post('/:id/comments', addCommentToCharacter);
router.get('/:id/comments/count', getCharacterCommentsCount);


export default  router;
