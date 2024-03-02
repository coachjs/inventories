module.exports= app =>{
    const users = require("../controllers/user.controller.js")
    var router = require("express").Router();

       // create
       router.post("/",users.create);
       // get all data category
       router.get("/",users.findAll);

       app.use("/api/user",router);

}