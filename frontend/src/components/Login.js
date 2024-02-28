import { Box, FormControl, VStack,FormLabel,Input,Button,Text } from '@chakra-ui/react'
import React,{useState} from 'react'
import { useLogin } from '../hooks/useLogin';
function Login() {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const {login,error,isLoading} = useLogin()
    const loginHandler = async function(e){
        e.preventDefault()
        await login(email,password);
    }
  return (
    <div>
        <Box>
            <form onSubmit={loginHandler}>
            <VStack>
                <FormControl>
                    <FormLabel>Email:</FormLabel>
                    <Input type='email' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </FormControl>
                <FormControl>
                    <FormLabel>Password:</FormLabel>
                    <Input type='password' placeholder='Enter your Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </FormControl>
                <Button colorScheme='whatsapp' type='submit' isLoading={isLoading}>Login</Button>

            </VStack>
            </form>
            {
                error && <Box mt="5px" fontSize="15px"borderColor="red" borderWidth="3px" bg='#FF6D6A' textAlign="center" color="white"> {error} </Box>
            }
        </Box>
      
    </div>
  )
}

export default Login
