import { v4 as uuidv4} from "uuid"
import { Post } from "../types/post.type"
import { PostModel } from "./post.schema"


const getAllPosts = async () => { 
/* try {
    return await PostModel.findAll();
} catch (error) {
    console.log(error);
    return null
} */
}

const getById = async ({id}:{id: string}) => { 
   /*  try {
        return await PostModel.findOne({where: {id}})
    } catch (error) {
        console.log(error);
        return null
    } */
}

const create = async ({
    author,
    title,
    content
}: Post): Promise<string | any> => {

    try {
        const post = {
            id: uuidv4() ,
            author,
            title,
            content,
            likes: [ ]
        }
    
        const postId = await PostModel.create(post);
        return postId
        
    } catch (error) {
        return { error};
    }
}

export const PostMethods = { getAllPosts, getById, create }