import { Router } from "express";
import { PostController } from "../controllers/post.controller";
const router = Router()


router.get('/', PostController.getAllPosts);
router.post('/',PostController.createPost);






export default router