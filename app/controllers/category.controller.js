const db = require("../models")
const Category = db.categories;
const Op = db.Sequelize.Op;

// Create
exports.create = (req,res)=>{
    // validasi request
    if(!req.body.name){
        res.status(400).send({
            message: "title tidak boleh kosong"
        });
        return;
    }

    //create 
    const category = {
        name: req.body.name,
        description: req.body.description
    };

    // simpen di database
    Category.create(category).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message : err.message || "ada error"
        });
    });
}

// read all
exports.findAll = (req,res) => {
    const name = req.query.name;
    var condition = name ? {name: {[Op.like]: `%${name}%`}}:null;

    Category.findAll({
        where:condition,
        include:[
            "products"
        ]
    }).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message : err.message || "ada error"
        });
    });
}