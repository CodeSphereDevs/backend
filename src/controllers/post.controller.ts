import { Request, Response } from "express";
import { PostMethods } from "../models/post.methods";
import { ServerResponse } from "../types/serverResponse";
import { validateData } from "../services/joiValidation";
import { RequestWithUserData } from "../middlewares/authenticate";


const getAllPosts = async (req: Request, res:Response<ServerResponse> ) => { 

    try {
        const result = await PostMethods.getAllPosts();
        res.json({success: true, message: "", data: result});
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error",})
    }

}



    const getByUsername = async (req: Request, res: Response<ServerResponse>) => {
        try {
            
            const {author} = req.params 
            const result = await PostMethods.getByUsername({author});

           
            if (result === null) {
                return res.status(500).json({ success: false, message: "Error fetching posts" });
            }

            if (result.length === 0) {
                return res.status(404).json({ success: false, message: "Este usuario no tiene publicaciones" });
            }
            res.status(200).json({ success: true,  message: "", data: result});

        } catch (error) {
            
            return res.status(500).json({success: true, message: "Server Error"})
        }
    }


const createPost = async (req : RequestWithUserData, res : Response<ServerResponse>) => {
    try {
        const validation = await validateData({ schema: "createPost", data: req.body})
        if( validation.error === "Validation Error"){
            return res
              .status(400)
              .json({ success: false, message: validation.message})
        }

        const newPost = {...validation, author: req.user.username}
        const result = await PostMethods.create(newPost);

        if(result.error?.name === "SequializeUniqueConstraintError"){
            return res  
                .status(400)
                .json({ success: false, message: "Nombre del post en uso"})
        }

        res.status(200).json({ success: true, message: "Post creaco correctamente", data: result})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false , message: "Server error"})
    }
}



export const PostController = {getAllPosts, createPost, getByUsername}