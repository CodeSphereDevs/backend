import { Router } from "express";


//Routes
import AuthRouter from "./auth";
import ProjectRouter from "./project.route";
import UsersRouter from "./user"



const router = Router();

router.use("/auth", AuthRouter)
router.use("/projects",ProjectRouter)


router.use("/users", UsersRouter);


export default router;