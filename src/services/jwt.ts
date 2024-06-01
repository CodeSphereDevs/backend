import jwt from "jsonwebtoken";
import config from "../config";
import { UserModel } from "../models/user.schema";

const createToken = (user: UserModel) => {
  try {
    return jwt.sign(
      {
        username: user.username,
        id: user.id,
        email: user.email,
      },
      config.SECRET_KEY,
      {
        expiresIn: config.EXPIRATION_TIME,
      }
    );
  } catch (error) {
    throw Error("Error creando el token");
  }
};

const verifyToken = (token:string) => {
  try {
    return jwt.verify(token, config.SECRET_KEY);
  } catch (error) {
    return null;
  }
};

export {createToken, verifyToken};
