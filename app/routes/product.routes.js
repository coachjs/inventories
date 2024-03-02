module.exports= app =>{
    const products = require("../controllers/product.controller.js")
    var router = require("express").Router();

       // create
       router.post("/",products.create);
       // get all data category
       router.get("/",products.findAll);

       app.use("/api/product",router);

}