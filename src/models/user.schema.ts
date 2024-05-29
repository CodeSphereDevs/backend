import { DataType} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes, Model, CreationOptional} from "sequelize";
import sequelize from "../services/database";
import { UUID } from "node:crypto";

// export const UserSchema = sequelize.define("user", {
//   id: {
//     type: DataType.UUID,
//     primaryKey: true,
//     defaultValue: DataType.UUID,
//   },
//   username: {
//     type: DataType.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password: {
//     type: DataType.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataType.STRING,
//     allowNull: false,
//     unique: true,
//   },
// });

class UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
  declare id: string;
  declare username: string;
  declare password: string;
  declare email: string;
  declare urlAvatar: CreationOptional<string>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

UserModel.init({
  id: {
    type: DataType.STRING,
    primaryKey: true,
  },
  username: {
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataType.STRING,
    allowNull: false,
  },
  email: {
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  },
  urlAvatar:{
    type: DataType.STRING,
    allowNull: true
  },
  createdAt: DataType.DATE,
  updatedAt: DataType.DATE,
},{
  sequelize: sequelize,
  tableName: "user"
})

export {UserModel};