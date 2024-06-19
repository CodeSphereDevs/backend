import { Request, Response, NextFunction} from "express";
import { ServerResponse } from "../types/serverResponse";
import { verifyToken } from "../services/jwt";

export interface RequestWithUserData extends Request {
    user?: any
}

export const authenticate = async (req: RequestWithUserData, res: Response<ServerResponse>, next: NextFunction) => {
    try {
        const { codeSphereToken: token } = req.cookies;

        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }
        const user = verifyToken(token);
        if (!user) {
            return res
                .clearCookie("token")
                .status(401)
                .json({ success: false, message: "Unauthorized" });
        }

        req.user = user;

        next();
    } catch (err) {
        console.log(err);
        res
            .clearCookie("token")
            .status(401)
            .json({ success: false, message: "Unauthorized" });
    }
};

