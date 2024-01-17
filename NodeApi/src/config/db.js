const mongoose = require('mongoose');

const mondbUrl="mongodb+srv://caseguru1488:VkeGYcyMvg6drzq9@cluster0.nhswhm4.mongodb.net/?retryWrites=true&w=majority"

const connectDb=()=>{
    return mongoose.connect(mondbUrl)
}

module.exports={connectDb};

// const mongoose = require("mongoose");

// require("dotenv").config();

// exports.connect = ()=>{
//     mongoose.connect(process.env.MONGODB_URL, {
//         useNewUrlParser:true,
//         useUnifiedTopology:true,
//     })
//     .then(console.log("DB Connection Successful"))
//     .catch((error)=>{
//         console.log("DB Connection Issues");
//         console.error(error);
//         process.exit(1)
//     })
// }