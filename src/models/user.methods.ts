import { v4 as uuidv4 } from "uuid";
import { UserSchema } from "./user.schema";
import { User } from "../types/user";
import { Model } from "sequelize";

const getByName = async ({username}:{username: string}) => {
  try {
    return await UserSchema.findOne({ where: { username } });
  } catch (error) {
    console.log(error);
    return null;
  }
};

const create = async ({ username, password, email }: User) : Promise<any>=> {
  try {;
    const user = { username, password, email, id:uuidv4() };
    const userId = await UserSchema.create(user);
    return userId;
  } catch (error) {
    return { error };
  }
};

export const UserModel = { getByName, create };
