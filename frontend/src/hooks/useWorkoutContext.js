import { useContext } from "react";

import { workoutcontext } from "../context/workoutContext";

export const useWorkoutContext = () =>{
     const  Context = useContext(workoutcontext);

     if(!Context){
        throw Error("Context Error");
     }
     
     return Context;
}

