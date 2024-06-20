import { ServerResponse } from "../types/serverResponse";
import { Request, Response } from "express";
import { ProjectMethods } from "../models/project.methods";
import { RequestWithUserData } from "../middlewares/authenticate";

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
  const { projectName } = req.params;
  try {
    const result = await ProjectMethods.getByProjectName({ projectName });
    res.json({ success: true, message: "", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const createProject = async (req: RequestWithUserData, res: Response<ServerResponse>) => {
    try{
        console.log(req.user)
        res.status(200).json({success:true, message:"asd"})
    }catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
      }
}

export const ProjectController = { getAllProjects, getByName, createProject };
