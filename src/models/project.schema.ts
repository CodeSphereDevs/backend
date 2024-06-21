import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { DataType } from "sequelize-typescript";
import sequelize from "../services/database";

class ProjectModel extends Model<
  InferAttributes<ProjectModel>,
  InferCreationAttributes<ProjectModel>
> {
  declare id: string;
  declare projectName: string;
  declare details: string;
  declare projectLeader: string;
  declare membersList: Array<string>;
  declare numMembers: number;
  declare pendingMembersList: Array<string>;
  declare technologies: Array<string>;
  declare status: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

ProjectModel.init(
  {
    id: {
      type: DataType.STRING,
      primaryKey: true,
    },
    projectName: {
      type: DataType.STRING,
      allowNull: false,
      unique: true,
    },
    details: {
      type: DataType.STRING,
      allowNull: false,
    },
    projectLeader: {
      type: DataType.STRING,
      allowNull: false,
    },
    numMembers:{
      type: DataType.INTEGER,
      allowNull:false
    },
    membersList: {
      type: DataType.ARRAY(DataType.STRING),
      allowNull: true,
    },
    pendingMembersList: {
      type: DataType.ARRAY(DataType.STRING),
      allowNull: true,
    },
    technologies: {
      type: DataType.ARRAY(DataType.STRING),
      allowNull: true,
    },
    status: {
      type: DataType.STRING,
    },
    createdAt: {
      type: DataType.DATE,
      defaultValue: DataType.NOW,
    },
    updatedAt: {
      type: DataType.DATE,
      defaultValue: DataType.NOW,
    },
  },
  {
    sequelize: sequelize,
    tableName: "project",
  }
);

export { ProjectModel };
