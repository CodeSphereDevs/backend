import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

import mainRouter from "../routes";

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(cookieParser());

server.use("/api", mainRouter);

server.use((req,res) => {
    // res.redirect("/api/doc");
    res.status(404).json({message: "Ruta no definida"})
})

const initServer = (port: number) => {
    server.listen(port, ()=>{ console.log("Servidor funcionando!")});
}

export default initServer;

