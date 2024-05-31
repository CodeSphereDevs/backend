import { v4 as uuidv4 } from "uuid";
import { UserModel } from "./user.schema";
import { User } from "../types/user";

const getByName = async ({username}:{username: string}) => {
  try {
    return await UserModel.findOne({ where: { username:username } });
  } catch (error) {
    console.log(error);
    return null;
  }
};

const create = async ({ username, password, email }: User) :Promise<string | any > => {
  try {;
    const user = { username, password, email, id: uuidv4() };
    const userId = await UserModel.create(user);
    return userId;
  } catch (error) {
    return { error };
  }
};

const getAll = async () => {
  try{
    return await UserModel.findAll();
  }catch(error){return null;}
}

export const UserMethods= { getByName, create, getAll };
