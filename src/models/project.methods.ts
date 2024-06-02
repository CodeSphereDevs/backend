import { Project } from "../types/project.type";
import { Where } from "sequelize/types/utils";

const getAllProjects= async () => {
      /* try {
        return await ProjectModel.findAll();
          } catch (error) {
        console.log(error)
      } */
}

const getByName = async ({name}: {name: String} ) => {
    /* try {
        return await ProjectModel.findOne({ Where: {name}})
    } catch (error) {
        console.log(error)
        return null;
    } */
}



export const ProjectMethods = { getAllProjects , getByName }