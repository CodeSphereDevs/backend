import { Request, Response } from "express";
import { ServerResponse } from "../types/serverResponse";
import { validateData } from "../services/joiValidation";
// import { UserModel } from "../models/user.methods";
import { comparePasswords } from "../services/bcrypt";
import { User } from "../types/user";
import { UserModel } from "../models/user.schema";
import { UserMethods } from "../models/user.methods";

const login = async (req: Request, res: Response<ServerResponse>) => {
  try {
    const validation = await validateData({schema:"login", data: req.body});

    if(validation.error === "ValidationError"){
        return res.status(400).json({ success: false, message: validation.message });
    }

    const user: UserModel | null = await UserMethods.getByName({ username: validation.username });
    if(!user){
      return res.status(400).json({ success: false, message: "Nombre de usuario o contraseña incorrecta" });
    }

    const coparePass = await comparePasswords(validation.password, user.password);

  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
};

const signup = async (req: Request, res: Response<ServerResponse>) => {
    try {
        const validation = await validateData({schema: "signup", data: req.body});

        if (validation.error === "ValidationError") {
            return res.status(400).json({ success: false, message: validation.message });
        };

        const result = await UserMethods.create(validation);

        if (result.error?.name === "SequelizeUniqueConstraintError") {
            return res
              .status(400)
              .json({ success: false, message: result.error.parent.detail });
          }

        res.status(201).json({ success: true, message: "Usuario creado", data:{ userId: result.id} });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server Error" })
    }
}


export const AuthController = { login, signup };