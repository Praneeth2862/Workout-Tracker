import { Button,Text } from '@chakra-ui/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDumbbell,faPowerOff} from '@fortawesome/free-solid-svg-icons'
import {useLogout} from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import React from 'react'
const NavBar = () => {
  const {logout} = useLogout()
  const {user} = useAuthContext()
  const logoutHandler =  ()=>{
     logout()
  }
  return (
    <div className='nav'>
      <div className="logo">
      <FontAwesomeIcon icon={faDumbbell} />
        <Text ml="10px" mr="10px">Workout Tracker</Text>
        <FontAwesomeIcon icon={faDumbbell} />
        </div>
      <div className="auth">
        <p>{user.email}</p>
        <Button colorScheme='whatsapp' onClick={logoutHandler}>
        <FontAwesomeIcon icon={faPowerOff} />
          <Text ml="8px">Logout</Text>
          </Button>
      </div>
      
    </div>
  )
}

export default NavBar
