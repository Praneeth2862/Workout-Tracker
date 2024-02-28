const mongoose = require("mongoose")
const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true});
        console.log("Successfully connected DB");
    }
    catch(err){
        console.log(`Failed to connected Db -${err}`)
    }

}
module.exports = connectDB;