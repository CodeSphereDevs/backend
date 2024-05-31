import { Router } from "express";


//Routes
import AuthRouter from "./auth";
import ProjectRouter from "./project.route";

const router = Router();

router.use("/auth", AuthRouter)
router.use("/projects",ProjectRouter)


export default router;