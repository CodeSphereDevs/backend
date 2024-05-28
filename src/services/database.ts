import { Sequelize } from "sequelize-typescript";
import config from "../config";

const sequelize = new Sequelize(config.DB_RENDER, {
  logging: false, //If it is true, display on the console each query made to the database. (true by default)
});

export default sequelize;
