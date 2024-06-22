import { ServerResponse } from "../types/serverResponse";
import { Request, Response } from "express";
import { ProjectMethods } from "../models/project.methods";
import { RequestWithUserData } from "../middlewares/authenticate";
import { validateData } from "../services/joiValidation";

const getAllProjects = async (req: Request, res: Response<ServerResponse>) => {
  try {
    const result = await ProjectMethods.getAllProjects();
    res.json({ success: true, message: "ok", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const getByName = async (req: Request, res: Response<ServerResponse>) => {
  try {
    const { projectName } = req.params;
    const result = await ProjectMethods.getByProjectName({ projectName });
    res.json({ success: true, message: "", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const createProject = async (req: RequestWithUserData, res: Response<ServerResponse>) => {
    try{
        const validation = await validateData({schema: "createProject", data: req.body});
        
        if (validation.error === "ValidationError") {
          return res
            .status(400)
            .json({ success: false, message: validation.message });
        }
      
        const newProject = {...validation, projectLeader: req.user.username};

        const result = await ProjectMethods.create(newProject);

        if (result.error?.name === "SequelizeUniqueConstraintError") {
          return res
          .status(400)
          .json({ success: false, message: "Nombre de proyecto ya usado" });
        }

        res.status(200).json({success:true, message:"Proyecto creado correctamente", data:result})
    }catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
      }
}




const addPendingMember = async (req: RequestWithUserData, res : Response<ServerResponse>) => {
  try {
    const {projectName} = req.params
    const username = req.user.username
    const result = await ProjectMethods.addPendingMember({projectName, username})


    if(result.status === 409){
      res.status(409).json({success: false, message: result.message})
    }

    res.status(200).json({success: true, message: req.user, data: result})
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error"})
  }
}

export const ProjectController = { getAllProjects, getByName, createProject, addPendingMember };
