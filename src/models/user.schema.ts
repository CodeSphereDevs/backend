import { DataType } from "sequelize-typescript";
import {
  InferAttributes,
  InferCreationAttributes,
  Model,
  CreationOptional,
} from "sequelize";
import sequelize from "../services/database";

class UserModel extends Model<
  InferAttributes<UserModel>,
  InferCreationAttributes<UserModel>
> {
  declare id: string;
  declare username: string;
  declare password?: string;
  declare email: string;
  declare urlAvatar: CreationOptional<string>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare projects: Array<string>;
  declare posts: Array<string>;
  declare stats: Object;
  declare title: CreationOptional<string>;
  declare details: CreationOptional<string>;
  declare technologies: Array<string>;
  declare links: Array<string>;
}

UserModel.init(
  {
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
    urlAvatar: {
      type: DataType.STRING,
      allowNull: true,
    },
    createdAt: DataType.DATE,
    updatedAt: DataType.DATE,
    projects: {
      type: DataType.ARRAY(DataType.STRING),
    },
    posts: {
      type: DataType.ARRAY(DataType.STRING),
    },
    stats: DataType.JSONB,
    title: {
      type: DataType.STRING,
      allowNull: true,
    },
    details: {
      type: DataType.STRING,
      allowNull: true,
    },
    technologies: { type: DataType.ARRAY(DataType.STRING) },
    links: {type: DataType.ARRAY(DataType.STRING)}
  },
  {
    sequelize: sequelize,
    tableName: "user",
  }
);

export { UserModel };
