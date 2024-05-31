import { UserModel } from "../models/user.schema";

export const removePass = (user: UserModel) => {
    const u = {...user.dataValues};
    delete u.password;
    return u;
}