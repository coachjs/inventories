module.exports= app =>{
    const categories = require("../controllers/category.controller.js")
    var router = require("express").Router();

       // create
       router.post("/",categories.create);
       // get all data category
       router.get("/",categories.findAll);

       app.use("/api/category",router);

}