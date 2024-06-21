import { Project } from "../types/project.type";
import { ProjectModel } from "./project.schema";
import { v4 as uuidv4 } from "uuid";

const getAllProjects = async () => {
  try {
    return await ProjectModel.findAll();
  } catch (error) {
    console.log(error);
  }
};

const getByProjectName = async ({ projectName }: { projectName: string }) => {
  try {
    return await ProjectModel.findOne({ where: { projectName } });
  } catch (error) {
    console.log(error);
    return null;
  }
};

const create = async ({projectLeader, projectName, details, technologies}:Project):Promise<string | any> => {
  try{
    const project = {
      projectLeader,
      projectName,
      details,
      technologies,
      id: uuidv4(),
      membersList: [projectLeader],
      pendingMembersList: [],
      status: "no iniciado",
    }
    const projectId = await ProjectModel.create(project);
    return projectId;
    
  }catch(error){
    return {error};
  }
}

export const ProjectMethods = { getAllProjects, getByProjectName, create };
