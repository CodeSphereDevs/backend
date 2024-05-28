import { Request, Response } from "express";
import { ServerResponse } from "../types/serverResponse";
import { validateData } from "../services/joiValidation";
import { UserModel } from "../models/user.methods";

const login = async (req: Request, res: Response<ServerResponse>) => {
  try {
    const validation = await validateData({schema:"login", data: req.body});

    if(validation.error === "ValidationError"){
        return res.status(400).json({ success: false, message: validation.message });
    }

    const result = await UserModel.getByName({ username: validation.username });
    res.json({success:true, message:"",data: result})

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

        const result = await UserModel.create(validation);

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