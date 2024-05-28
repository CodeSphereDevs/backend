import config from "./config";
import sequelize from "./services/database";
import initServer from "./services/server";

(async ()=> {
    try{
        await sequelize.sync();
        console.log("Conectado a base de datos");
        initServer(parseInt(config.PORT));
    }
    catch(error){
        console.log(error)
    }
})();