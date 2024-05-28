import { config } from "dotenv";

config();

export default{
    PORT: process.env.PORT || "8080",
    DB_RENDER:process.env.DB_RENDER || "",
    SECRET_KEY:process.env.SECRET_KEY,
    EXPIRATION_TIME:process.env.EXPIRATION_TIME
}