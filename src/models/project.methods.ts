import { Model } from "sequelize";
import { Project } from "../types/project";
import { Where } from "sequelize/types/utils";

const getAllProjects= async () => {
      /* try {
        return await ProjectSchema.findAll();
          } catch (error) {
        console.log(error)
      } */
}

const getByName = async ({name}: {name: String} ) => {
    /* try {
        return await ProjectSchema.findOne({ Where: {name}})
    } catch (error) {
        console.log(error)
        return null;
    } */
}



export const ProjectModel = { getAllProjects , getByName }