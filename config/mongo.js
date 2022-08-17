const mongoose = require("mongoose")

const dbConnect = () =>{
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err, res)=>{
        return !err ? console.log("Conexion correcta") : console.error("Error de conexion" + err)
    })
}

module.exports = dbConnect