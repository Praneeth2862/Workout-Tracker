import { Box, FormControl, VStack,FormLabel,Input, Button } from '@chakra-ui/react'
import React,{useState} from 'react'
import {useSignup} from '../hooks/useSignup'
function Signup() {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [confirmpassword,setConfirmPassword] = useState();
    const {signup,isLoading,error} = useSignup()
    const submitHandler = async function(e){
        e.preventDefault();
        await signup(email,password);
        
    }
  return (
    <div>
        <Box>
            <form onSubmit={submitHandler}>
            <VStack>
                <FormControl >
                    <FormLabel>Email:</FormLabel>
                    <Input type='email' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </FormControl>
                <FormControl>
                    <FormLabel>Password:</FormLabel>
                    <Input type='password' placeholder='Enter your Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </FormControl>
                <FormControl>
                    <FormLabel>Confirm Password:</FormLabel>
                    <Input type='password' placeholder='Confirm your Password' value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                </FormControl>
                <Button colorScheme='whatsapp' type="submit">Signup</Button>
                {
                    error && <p>{error}</p>
                }
            </VStack>
            </form>
        </Box>
      
    </div>
  )
}

export default Signup
