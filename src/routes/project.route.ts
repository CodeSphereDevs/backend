import { Router } from "express";
import { ProjectController } from "../controllers/projects.controller";
import { authenticate } from "../middlewares/authenticate";

const router = Router();

router.get("/", ProjectController.getAllProjects);
router.get("/:projectName", ProjectController.getByName);
router.post("/", authenticate ,ProjectController.createProject);

export default router;
