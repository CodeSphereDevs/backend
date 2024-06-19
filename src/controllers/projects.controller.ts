import { ServerResponse } from "../types/serverResponse";
import { Request,Response } from "express";
import { ProjectMethods } from "../models/project.methods";



const getAllProjects = async (req: Request ,res:Response<ServerResponse> ) => {

    try {
        const result = await ProjectMethods.getAllProjects();
        res.json({success: true, message:"", data: result })

    } catch (error) {
        console.log(error);
        res.status(500).json({success: false , message: "Server error"})       
    }


}

const getByName = async (req: Request ,res:Response<ServerResponse> ) => {
    const { name } = req.params
    try {
        const result = await ProjectMethods.getByName({name});
        res.json({success: true, message:"", data: result })

    } catch (error) {
        console.log(error);
        res.status(500).json({success: false , message: "Server error"})       
    }

}


export const projectController = { getAllProjects , getByName}
