import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "../services/database";
import { DataType } from "sequelize-typescript";





class PostModel extends Model<
    InferAttributes<PostModel>,
    InferCreationAttributes<PostModel>
>{
    
 declare id: string;
 declare title: string;
 declare author: string;
 declare content: string;
 declare likes:CreationOptional <number>;
    
}

PostModel.init({
    id:{
        type: DataType.STRING,
        primaryKey: true
    },
    title:{
        type:DataType.STRING,
        allowNull: false,

    },
    author:{
        type:DataType.STRING,
        allowNull: false,
    },
    content:{
        type:DataType.STRING,
        allowNull: false,
    },
    likes:{
        type:DataType.STRING,
        allowNull: true,
    }
},{
    sequelize: sequelize,
    tableName: "post"
})




export {PostModel};