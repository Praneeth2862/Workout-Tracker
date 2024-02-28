const express = require("express")
const connectDB = require("./config/db")
require("dotenv").config()
const userRouter =require("./routes/userRoutes")
 const workoutRouter = require("./routes/workoutRouter")
const app =express()
const PORT = process.env.PORT
connectDB();
app.use(express.json());
app.use("/api/user",userRouter)
app.use("/api/workout",workoutRouter)
app.get("/",(req,res)=>{
    res.send("Api running ");
})

app.listen(PORT,()=>{
    console.log("Running on port 5000");
})