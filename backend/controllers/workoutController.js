
const  mongoose  = require("mongoose");
const Workout = require("../models/workout")

const getWorkouts = async (req,res)=>{
    try{
        const user_id = req.user._id;
        const Workouts =await Workout.find({user_id}).sort({createdAt:-1});
    res.status(200).json({"status":"success","workouts":Workouts});
    }
    catch(err){
        res.status(400).send("No workouts found");
    }
}
const createWorkout = async (req,res)=>{
    try{
        const user_id = req.user._id;
        const {title,load,reps} = req.body;
        if (!title || !load || !reps) {
            return res.status(400).json({ status: "Error", error: "Incomplete data provided" });
        }
        const workout = await Workout.create({
            title,load,reps,user_id
        })
        console.log(workout)
        res.status(201).send(workout);
    }
    catch(err){
        res.status(400).json({"status":"Error","error":err})
    }
}
const updateSingleWorkout = async (req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({"status":"Error","error":"No workout found"})
    }
    try{
        const updatedWorkout = await Workout.findByIdAndUpdate(id,{...req.body});
        await res.status(200).send(updatedWorkout)
    }
    catch(err){
        res.status(400).json({"status":"Error","error":err})
    }
}

const deleteSingleWorkout = async (req,res)=>{
    
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({"status":"Error","error":"No workout found"})
    }
    try{
         await Workout.findByIdAndDelete(id);
        await res.status(200).json({id});
    }
    catch(err){
        res.status(400).json({"status":"Error","error":err})
    }
}

module.exports = {getWorkouts ,createWorkout ,updateSingleWorkout ,deleteSingleWorkout}
