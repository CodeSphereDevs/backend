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

const create = async ({
  projectLeader,
  projectName,
  details,
  technologies,
  numMembers,
}: Project): Promise<string | any> => {
  try {
    const project = {
      projectLeader,
      projectName,
      details,
      technologies,
      numMembers,
      id: uuidv4(),
      membersList: [projectLeader],
      pendingMembersList: [],
      status: "no iniciado",
    };
    const projectId = await ProjectModel.create(project);
    return projectId;
  } catch (error) {
    return { error };
  }
};

const addPendingMember = async ({
  projectName,
  username,
}: {
  projectName: string;
  username: string;
}): Promise<string | any> => {
  try {
    const project = await ProjectModel.findOne({
      where: { projectName },
    });

    if (!project) {
      throw new Error("No existe un proyecto con ese nombre");
    }
    if (project.pendingMembersList.includes(username)) {
      return {
        status: 409,
        message: "El usuario ya cuenta con una solicitud para este proyecto",
      };
    }

    project.pendingMembersList.push(username);

    const projectUpdated = await ProjectModel.update({pendingMembersList: project.pendingMembersList},{where: {projectName}});

    return projectUpdated;
  } catch (error) {
    return { error };
  }
};

export const ProjectMethods = {
  getAllProjects,
  getByProjectName,
  create,
  addPendingMember,
};
