import React, { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-regular-svg-icons'
import axios from "axios";
import { useToast ,Text} from '@chakra-ui/react'
import { useAuthContext } from "../hooks/useAuthContext";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import {Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,FormControl,FormLabel,Input,ModalFooter,useDisclosure} from '@chakra-ui/react';
function EditModal({id}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [title,setTitle] = useState();
    const [load,setLoad] = useState();
    const [reps,setReps] = useState();
    const {user} = useAuthContext()
    const {dispatch} = useAuthContext()
     async function handleSubmit(e){
      console.log("edit called")
      e.preventDefault();
      try{
        const response = await axios.patch("/api/workout/"+id,{
                "title": title,
                "load": load,
                "reps": reps
        },{
          headers:{
            'Authorization':`Bearer ${user.token}`
          }
        })
         toast({
                title: 'Workout Edited .',
                description: "Your Workout Edited Succesfully.",
                status: 'success',
                duration: 4000,
                isClosable: true,})
      }
      catch(err){
        toast({
          title: 'Edit failure .',
          description: "cannot Edit your workout.",
          status: 'warning',
          duration: 9000,
          isClosable: true,})
      }

    }
    return (
      <>
        
        <Button onClick={onOpen} colorScheme="whatsapp" fontSize="15px">
        <FontAwesomeIcon icon={faPenToSquare} /> 
            <Text ml="5px">Edit</Text></Button>
  
  <Modal
    initialFocusRef={initialRef}
    finalFocusRef={finalRef}
    isOpen={isOpen}
    onClose={onClose}
  >
    <ModalOverlay />
    <form onSubmit={handleSubmit}>
        <ModalContent>
          <ModalHeader color="#179848">Edit Workout</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl onSubmit={handleSubmit}>
              <FormLabel color="#179848">Title</FormLabel>
              <Input type="text" ref={initialRef} placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel color="#179848" >Load</FormLabel>
              <Input type = "number" placeholder='Load' value={load} onChange={(e)=>setLoad(e.target.value)}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel color="#179848" >Reps</FormLabel>
              <Input type="number" placeholder='Reps' value={reps} onChange={(e)=>setReps(e.target.value)}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" onClick = {()=>{
              onClose();
            }} colorScheme='whatsapp' mr={3} >
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
        </form>
  
  </Modal>
        
      </>
    )
  }
  export default  EditModal;