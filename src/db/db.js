const mongoose=require("mongoose");
async function connectDB(){
  await mongoose.connect("mongodb+srv://bd:dbm12345@backend.5q99ozk.mongodb.net/halley")
  console.log("DB connected");
}
module.exports=connectDB;