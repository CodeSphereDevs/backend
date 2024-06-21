import { Router } from "express";


//Routes
import AuthRouter from "./auth";
import ProjectRouter from "./project.route";
import UsersRouter from "./user"
import PostRouter from "./post.route"



const router = Router();

router.use("/auth", AuthRouter)
router.use("/projects",ProjectRouter)


router.use("/users", UsersRouter);
router.use("/posts", PostRouter);

export default router;