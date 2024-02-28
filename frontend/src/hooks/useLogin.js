import React, { useState } from "react";
import axios from 'axios'
import { useAuthContext } from "./useAuthContext";

export const useLogin = () =>{
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(false);
    const {dispatch} = useAuthContext()

    const login = async function(email,password){

        try{
            setIsLoading(true);
            const response = await axios.post('/api/user/login',{
                "email":email,
                "password":password
            })
            console.log(response)
            if(response.status == 200){
                localStorage.setItem('user',JSON.stringify(response.data))
                dispatch({type:'LOGIN',payload:response.data})
                setIsLoading(false) 
            }
        }catch(error){
            setError("Invalid Crediantials")
            setIsLoading(false)
        }
    }
    return {login,isLoading,error};
}