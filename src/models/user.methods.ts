import { v4 as uuidv4 } from "uuid";
import { UserModel } from "./user.schema";
import { User } from "../types/user";
import { hashPassword } from "../services/bcrypt";

const getByName = async ({ username }: { username: string }) => {
  try {
    return await UserModel.findOne({ where: { username: username } });
  } catch (error) {
    console.log(error);
    return null;
  }
};

const create = async ({
  username,
  password,
  email,
}: User): Promise<string | any> => {
  try {
    const pass = await hashPassword(password);
    const user = {
      username,
      password: pass,
      email,
      id: uuidv4(),
      projects: [],
      posts: [],
      stats: { projects: 0, posts: 0 },
      technologies: [],
      links:[]
    };
    const userId = await UserModel.create(user);
    return userId;
  } catch (error) {
    return { error };
  }
};

const getAll = async () => {
  try {
    return await UserModel.findAll();
  } catch (error) {
    return null;
  }
};

export const UserMethods = { getByName, create, getAll };
