import { Router } from "express";
import { PostController } from "../controllers/post";
import { authenticate } from "../middlewares/authenticate";

const router = Router()

router.get('/', PostController.getAllPosts);
router.get('/:title', PostController.getByTitle);
router.post('/',authenticate,PostController.createPost);
router.get('/:author', PostController.getByUsername);

export default router