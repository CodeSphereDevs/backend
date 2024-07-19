import { Router } from "express";
import { ProjectController } from "../controllers/projects";
import { authenticate } from "../middlewares/authenticate";

const router = Router();

router.get("/", ProjectController.getAllProjects);
router.get("/:projectName", ProjectController.getByName);
router.post("/", authenticate ,ProjectController.createProject);
router.put("/joinProject/:projectName",authenticate, ProjectController.addPendingMember)

export default router;
