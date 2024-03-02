const db = require("../models")
const Product = db.products;
const Op = db.Sequelize.Op;

// Create
exports.create = (req,res)=>{
    // validasi request
    if(!req.body.name || !req.body.categoryId ){
        res.status(400).send({
            message: "name produk tidak boleh kosong"
        });
        return;
    }

    //create 
    const product = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
        categoryId: req.body.categoryId
    };

    // simpen di database
    Product.create(product).then(data=>{
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

    Product.findAll({
        where:condition,
        include:[
            "category"
        ]
    }).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message : err.message || "ada error"
        });
    });
}