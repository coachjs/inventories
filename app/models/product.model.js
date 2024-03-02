module.exports = (sequelize,DataTypes)=>{
    const Product= sequelize.define("product",{
        name: {
            type: DataTypes.STRING
        },
        description:{
            type: DataTypes.STRING
        },
        price:{
            type: DataTypes.INTEGER
        },
        stock:{
            type: DataTypes.INTEGER
        }
    });
    return Product;
}