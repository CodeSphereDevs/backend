import { Router } from "express";

import AuthRouter from "./auth";
import UsersRouter from "./user";
import ProjectsRouter from "./project.route";

const router = Router();

router.use("/auth", AuthRouter);
router.use("/users", UsersRouter);
router.use("/projects", ProjectsRouter);

export default router;