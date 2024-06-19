import { Router } from "express";
import { projectController } from "../controllers/projects.controller";

const router = Router(); 

router.get("/", projectController.getAllProjects)
router.get("/:projectname",projectController.getByName)



export default router;