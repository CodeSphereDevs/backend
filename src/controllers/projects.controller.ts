import { ServerResponse } from "../types/serverResponse";
import { Request,Response } from "express";
import { ProjectModel } from "../models/project.methods";

const showProjects = async (req: Request ,res:Response<ServerResponse> ) => {

    try {
        const result = await ProjectModel.getAllProjects();
        res.json({success: true, message:"", data: result })

    } catch (error) {
        console.log(error);
        res.status(500).json({success: false , message: "Server error"})       
    }


}

const detailProject = async (req: Request ,res:Response<ServerResponse> ) => {
    const { name } = req.params
    try {
        const result = await ProjectModel.getByName({name});
        res.json({success: true, message:"", data: result })

    } catch (error) {
        console.log(error);
        res.status(500).json({success: false , message: "Server error"})       
    }

}


export const projectController = { showProjects , detailProject}
