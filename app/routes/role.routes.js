module.exports= app =>{
    const roles = require("../controllers/role.controller.js")
    var router = require("express").Router();

       // create
       router.post("/",roles.create);
       // get all data category
       router.get("/",roles.findAll);

       app.use("/api/role",router);

}