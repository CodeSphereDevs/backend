import { Router } from "express";
import { UserController } from "../controllers/user";
import { authenticate } from "../middlewares/authenticate";

const router = Router();

router.get("/", UserController.getAll);
router.get("/:username", UserController.getByName);
router.patch("/update", authenticate, UserController.updateUserProfile);


export default router;
