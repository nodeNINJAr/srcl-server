const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI

const connectDB= async()=>{
    
    try{
      await mongoose.connect(mongoURI);
      console.log("mongo db connected sccesfully")
    }
    catch(err){
      console.log("mongo DB connection failed", err);
      process.exit(1);
    }
     
}
module.exports= connectDB;