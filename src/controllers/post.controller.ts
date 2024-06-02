import { Request, Response } from "express";
import { PostMethods } from "../models/post.methods";
import { ServerResponse } from "../types/serverResponse";


const getAllPosts = async (req: Request, res:Response<ServerResponse> ) => { 

    try {
        const result = await PostMethods.getAllPosts();
        res.json({success: true, message: "", data: result});
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error",})
    }

}



export const postController = {getAllPosts}