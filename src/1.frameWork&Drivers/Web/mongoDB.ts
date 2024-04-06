import mongoose from "mongoose";
const dbLink: string = "mongodb://127.0.0.1:27017/manGrow";
// Connect to MongoDB
const db = ()=>{mongoose.connect(dbLink).then(() => {
  console.log("db Connected successfully");
}).catch(err => {
  console.error("Error connecting to database:", err);
});}

export default db;