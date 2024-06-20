


const getAllPosts = async () => { 
/* try {
    return await PostModel.findAll();
} catch (error) {
    console.log(error);
    return null
} */
}


const sortPost = async ({sortBy} : {sortBy: string} ) => { 
    
   /*  const criterio = sortBy === "transcendence" ? ['trasendence'] : ['date']
    try {
        return await PostModel.findAll({order: [criterio]})
    } catch (error) {
        console.log(error)
        return null
    } */
}

const orderPost = async ({ orderBy ,Date } : { orderBy: string, Date: Date}) => { 
   /*  try {
        const criterio = orderBy === 'ASC' ? [Date , 'ASC']  : [Date, 'DESC']
        return await PostModel.findAll({order: [criterio]})
    } catch (error) {
        console.log(error)
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

const create = async () => {

}

export const PostMethods = { getAllPosts,sortPost ,orderPost, getById, create }