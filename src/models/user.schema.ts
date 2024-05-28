import { DataType } from "sequelize-typescript";
import sequelize from "../services/database";

export const UserSchema = sequelize.define("user", {
  id: {
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUID,
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
});
