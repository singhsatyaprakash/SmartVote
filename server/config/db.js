const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();


const connection=async()=>{
    await mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Connected to database...");
    }).catch((error)=>{
        console.log(error);
    })
}

module.exports=connection;