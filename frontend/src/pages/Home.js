import React from 'react'
import { Tabs,Tab,TabList,TabPanels,TabPanel, Container,Box ,Text} from '@chakra-ui/react'
import Signup from '../components/Signup'
import Login from '../components/Login'
export default function Home() {
  return (
    <div className='Home'>
      <Container maxW="400px"  centerContent borderRadius="10px" border="2px" bg="white">
        <Box
        color='#25D366'
        d='flex'
        alignItems='center'
        justifyContent='center'
        fontSize='x-large'
        p={5}>
          <Text mb="10px"  fontSize="1.2em" textAlign="center" fontWeight="bolder" w="100%">Workout Tracker</Text>
        <Tabs variant='soft-rounded' colorScheme='whatsapp' alignItems="center">
                <TabList>
                    <Tab w="50%">Login</Tab>
                    <Tab w="50%">Signup</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                    <Login/>
                    </TabPanel>
                    <TabPanel>
                    <Signup/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
      </Container>
    </div>
  )
}
