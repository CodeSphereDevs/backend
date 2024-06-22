import { Request, Response } from "express";
import { ServerResponse } from "../types/serverResponse";
import { validateData } from "../services/joiValidation";
import { comparePasswords } from "../services/bcrypt";
import { UserModel } from "../models/user.schema";
import { UserMethods } from "../models/user.methods";
import { createToken } from "../services/jwt";
import { removePass } from "../utils/removePass";

const login = async (req: Request, res: Response<ServerResponse>) => {
  try {
    const validation = await validateData({ schema: "login", data: req.body });

    if (validation.error === "ValidationError") {
      return res
        .status(400)
        .json({ success: false, message: validation.message });
    }

    const user: UserModel | null = await UserMethods.getByName({
      username: validation.username,
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Nombre de usuario o contraseña incorrecta",
      });
    }

    const comparePass = await comparePasswords(
      validation.password,
      user.password!
    );

    if (!comparePass) {
      return res.status(400).json({
        success: false,
        message: "Nombre de usuario o contraseña incorrecta",
      });
    }

    const token = createToken(user);
    res.cookie("codeSphereToken", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 15 * 24 * 60 * 60 * 1000,
      secure: true,//VALOR POR DEFAULT TRUE
    });
    res.status(200).json({
      success: true,
      message: "Login correcto",
      data: removePass(user),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
};

const signup = async (req: Request, res: Response<ServerResponse>) => {
  try {
    const validation = await validateData({ schema: "signup", data: req.body });

    if (validation.error === "ValidationError") {
      return res
        .status(400)
        .json({ success: false, message: validation.message });
    }

    const result = await UserMethods.create(validation);

    if (result.error?.name === "SequelizeUniqueConstraintError") {
      if (result.error.parent.detail.includes("username")) {
        return res
          .status(400)
          .json({ success: false, message: "Nombre de usuario ya en uso" });
      } else if (result.error.parent.detail.includes("email")) {
        return res
          .status(400)
          .json({ success: false, message: "Email ya en uso" });
      }
      return res.status(400).json({ success: false, message: "Error" });
    }

    res.status(201).json({
      success: true,
      message: "Usuario creado",
      data: { userId: result.id },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const logout = async (req: Request, res: Response<ServerResponse>) => {
  try {
    res.clearCookie("codeSphereToken").status(200).json({success:true, message:"logout correcto"})
  } catch {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const AuthController = { login, signup, logout };
