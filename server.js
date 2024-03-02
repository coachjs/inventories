const express = require('express')
const cors = require("cors")
const app = express()
// setting origin cors
var corsoption ={
    origin: "http://localhost:3000"
}
// app.use(cors(corsoption))
app.use(cors())
// parse request content type - application/json
app.use(express.json())
// parse request application/x-www-force-urlencode
app.use(express.urlencoded({extended: true}))
// route /
app.get("/",(req,res)=>{
    res.json({
        message : "Selamat datang di DB INVENTORIES"
    })
})

// sync database
const db = require("./app/models")
db.sequelize.sync({force:false}).then(()=>{
    console.log("sync db")
}).catch((err)=>{
    console.log(`failed to sync karena ${err.message}`)
})

//route category
require("./app/routes/category.routes")(app);
//route category
require("./app/routes/product.routes")(app);
//route role
require("./app/routes/role.routes")(app);
//route user
require("./app/routes/user.routes")(app);

// setting port listen
const PORT = 4000
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})