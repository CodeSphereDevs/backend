import jwt from "jsonwebtoken";
import config from "../config";
import { User } from "../types/user";

const createToken = (user: User) => {
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
