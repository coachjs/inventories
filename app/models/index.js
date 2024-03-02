const dbConfig = require("../config/db.config.js")
const Sequelize = require("sequelize")
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect:dbConfig.dialect
    }
    );
const db ={};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//require model
db.categories = require("./category.model.js")(sequelize,Sequelize);
db.products = require("./product.model.js")(sequelize,Sequelize);
db.roles = require("./role.model.js")(sequelize,Sequelize);
db.users = require("./user.model.js")(sequelize,Sequelize);

// membuat relasi one to many , category dengan product
db.categories.hasMany(db.products, { as : "products"});
db.products.belongsTo(db.categories,{
    foreignKey : "categoryId",
    as : "category"
});

// membuat relasi one to many , category dengan product
db.roles.hasMany(db.users, { as : "users"});
db.users.belongsTo(db.roles,{
    foreignKey : "roleId",
    as : "role"
});


module.exports = db;