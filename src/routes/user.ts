import { Router } from "express";
import { UserController } from "../controllers/user";

const router = Router();

router.get("/", UserController.getAll);
router.get("/:username", UserController.getByName);


export default router;
