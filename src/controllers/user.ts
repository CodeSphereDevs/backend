import { Request, Response } from "express";
import { UserMethods } from "../models/user.methods";
import { ServerResponse } from "../types/serverResponse";
import { removePass } from "../utils/removePass";
import { RequestWithUserData } from "../middlewares/authenticate";

const getAll = async (req: Request, res: Response<ServerResponse>) => {
  try {
    const users = await UserMethods.getAll();

    const u = users?.map((user) => removePass(user));

    res.status(200).json({ success: true, message: "Usuarios", data: u });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const getByName = async (req: Request, res: Response<ServerResponse>) => {
  try {
    const { username } = req.params;

    const user = await UserMethods.getByName({ username });
    if (!user) {
      return res
        .status(400)
        .json({
          success: false,
          message: "No existe un usuario con ese username",
        });
    }

    res
      .status(200)
      .json({
        success: true,
        message: "Usuario obtenido",
        data: removePass(user),
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const updateUserProfile = async (req: RequestWithUserData, res: Response<ServerResponse>) => {
  try {
    
    console.log(req.user)
    res
      .status(200)
      .json({
        success: true,
        message: "Usuario obtenido",
        data: "a",
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const UserController = { getAll, getByName, updateUserProfile };
