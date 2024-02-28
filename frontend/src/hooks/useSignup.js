import React, { useState } from "react";
import axios from 'axios'
import { useAuthContext } from "./useAuthContext";

export const useSignup = () =>{
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(false);
    const {dispatch} = useAuthContext()

    const signup = async function(email,password){

        const response = await axios.post('/api/user/signup',{
            "email":email,
            "password":password
        })
        console.log(response)
        if(!response.status == 200){
            setIsLoading(false);
            setError(`Error Signup ${response.error}`)
        }
        if(response.status == 200){
            localStorage.setItem('user',JSON.stringify(response.data))
            dispatch({type:'LOGIN',payload:response.data})
            setIsLoading(false) 
        }
    }
    return {signup,isLoading,error};
}