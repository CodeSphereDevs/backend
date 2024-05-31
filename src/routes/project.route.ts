import { Router } from "express";
import { projectController } from "../controllers/projects.controller";

const router = Router(); 

router.get("/", projectController.showProjects)
router.get("/:projectname",projectController.detailProject)



export default router;