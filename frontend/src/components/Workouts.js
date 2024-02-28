import React, { useEffect, useState } from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContext'
import {useAuthContext} from '../hooks/useAuthContext'
import axios from 'axios'
import Workout from './Workout'
import MyModal from './MyModal'
import { Spinner } from '@chakra-ui/react'

const Workouts = () => {
      const [loading,setLoading] = useState(false)
       //const [workouts,setWorkouts] = useState([])
       const {user} = useAuthContext();
        const {workouts,dispatch} = useWorkoutContext()
    useEffect( ()=>{
       const fetchWorkouts = async ()=>{
        try{
          setLoading(true);
          if(!user){
            throw Error("Login Required")
          }
            const response = await axios.get("/api/workout",{
              headers:{
                'Authorization':`Bearer ${user.token}`
              }
            });
               dispatch({type:"SET_WORKOUTS" ,payload:response.data.workouts})
              //setWorkouts(response.data.workouts);
              setLoading(false);
        }
        catch(err){
            console.log(err);
            setLoading(false);
        }
       }
       fetchWorkouts()
    },[])
  return (
    <div className='wgrid'>
      {
        loading?<Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />:
       workouts.map((workout)=><Workout key={workout._id} id={workout._id} title={workout.title} load={workout.load} reps={workout.reps} date={workout.createdAt}/>)
      }
      <div className="add">
      <MyModal/>
      </div>
    </div>
  )
}

export default Workouts
