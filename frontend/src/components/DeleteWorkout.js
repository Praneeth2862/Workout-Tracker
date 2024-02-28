import {Button,useToast,Text} from '@chakra-ui/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashCan} from '@fortawesome/free-regular-svg-icons'
import { useAuthContext } from '../hooks/useAuthContext'
import {useWorkoutContext} from '../hooks/useWorkoutContext'
import React from 'react'
import axios from "axios";
// import {useToast} from '@chakra-ui/react'
 const DeleteWorkout = ({id}) => {
  const {user} = useAuthContext()
  const {workouts,dispatch} = useWorkoutContext()
     const toast = useToast()
     async function handleDelete(){
        try{
            const response =  await axios.delete('/api/workout/'+id,{
              headers:{
                'Authorization':`Bearer ${user.token}`
              }
             })
            toast({
                title: 'Workout Deleted .',
                description: "Your Workout succesfully deleted.",
                status: 'success',
                duration: 4000,
                isClosable: true
            })
            console.log(response.data)
            dispatch({type:"DELETE_WORKOUTS",payload:response.data})
            console.log(workouts);
        }
        catch(e){
           console.log("delete error");
        }
    }
  return (
    <div>
      <Button bg= "#E53E3E" color="#FFFF"onClick={handleDelete} _hover={{backgroundColor :  'red'}}>
      <FontAwesomeIcon icon={faTrashCan}  />
        <Text ml="6px">Delete</Text>
        </Button>
    </div>
  )
}

export default DeleteWorkout
