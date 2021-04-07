const express = require("express");
const server = express();
server.use(express.json());
const PORT = 5000;

// Knex configuration is modex to knexfile.js
/* const knex = require('knex')({
    client:'mysql',
    connection:{
        host:"127.0.0.1",
        user:"root",
        password:"admin",
        database:"shop"

    }
})
 */

server.get("/", (req,res, next)=>{  // next is used to release the request on getting the response  
    res.json({"message":"Omm"})
    next();// this releases the rest response to the server to handel any incomeing request this help in browser not be is consatant asynch loop
    //rext is like return 
})

server.get("/th", (req,res, next)=>{  // next is used to release the request on getting the response  
    res.status(200).json({success:bar})
    next();// this releases the rest response to the server to handel any incomeing request this help in browser not be is consatant asynch loop
    //rext is like return 
})

server.use((err,req,res,next)=>{  // 4 argumnet meas it is an ERROR handeling middleware
    const message = err.message;
    res.status(500).json({err:message});
})

server.listen(PORT,() =>{
    console.log(`*** Listening to port ${PORT} ***`);
    console.log(`*** check  http://localhost:${PORT} ***`);
})