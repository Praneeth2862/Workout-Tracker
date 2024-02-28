import React, { useState } from "react";
import axios from "axios";
import { useToast } from '@chakra-ui/react'
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, useDisclosure } from '@chakra-ui/react';
import { useAuthContext } from "../hooks/useAuthContext";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
function MyModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const {user} = useAuthContext()
  const {dispatch} = useWorkoutContext()
  async function handleSubmit(e) {
    e.preventDefault();
    if(!user){
      throw Error("Login Required")
    }
    try {
      const response = await axios.post("/api/workout/", {
        title: title,
        load: load,
        reps: reps,
      },{
        headers:{
          'Authorization':`Bearer ${user.token}`
        }
      });
      console.log(response.data)
      // Assuming your API response structure contains a success property
      if (response.status==201) {
        setTitle("");
        setLoad("");
        setReps("");
        toast({
          title: 'Workout Added.',
          description: 'Your workout was successfully added.',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });

        // Call setWorkouts only after successful workout addition
        dispatch({type:"CREATE_WORKOUTS",payload:response.data})
        onClose();
      } else {
        toast({
          title: 'Workout Error.',
          description: 'Failed to add workout. Please try again.',
          status: 'warning',
          duration: 4000,
          isClosable: true,
        });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: 'Workout Error.',
        description: 'Failed to add workout. Please check your network connection.',
        status: 'warning',
        duration: 9000,
        isClosable: true,
      });
    }
  }

  return (
    <>
      <Button onClick={onOpen} colorScheme="whatsapp" fontSize="30px">+</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <form onSubmit={handleSubmit}>
          <ModalContent>
            <ModalHeader color="#179848">Add Workout</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl onSubmit={handleSubmit}>
                <FormLabel color="#179848">Title</FormLabel>
                <Input type="text" ref={initialRef} placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel color="#179848">Load</FormLabel>
                <Input type="number" placeholder='Load' value={load} onChange={(e) => setLoad(e.target.value)} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel color="#179848">Reps</FormLabel>
                <Input type="number" placeholder='Reps' value={reps} onChange={(e) => setReps(e.target.value)} />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" onClick={() => { onClose(); }} colorScheme='whatsapp' mr={3} >
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

export default MyModal;
