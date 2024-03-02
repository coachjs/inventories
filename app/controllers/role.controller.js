const db = require("../models")
const Role = db.roles;
const Op = db.Sequelize.Op;

// Create
exports.create = (req,res)=>{
    // validasi request
    if(!req.body.name){
        res.status(400).send({
            message: "role tidak boleh kosong"
        });
        return;
    }

    //create 
    const role = {
        name: req.body.name
    };

    // simpen di database
    Role.create(role).then(data=>{
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

    Role.findAll({
        where:condition,
        include:[
            "users"
        ]
    }).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message : err.message || "ada error"
        });
    });
}
