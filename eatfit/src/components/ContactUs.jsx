import { Box, Button, FormControl, Image, Input, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <Box
    fontFamily="monospace"
    w="100%"
    backgroundColor="purple"
    h="300px"
    display="flex"
    justifyContent="space-between"
    
    >
      <Box ml="20px">
        <Image src="https://djgt4pi2uqo7n.cloudfront.net/prod/assets/images/eatfit-white-footer.svg" alt="" w="100px"/>
        <Box
        textAlign="left"
        ml="5px"
        color="white"
        >
            <Text>ABOUT US</Text>
            <Text>At Eatfit we offer healthy, yummy, honest & wholesome Indian food, made with real ingredients, zero trans fat, and lots of love!
#HealthyMadeHappier</Text>
        </Box>
        <Box 
          display="flex"
          mt="10px"
          gap="10px"
          >
        <FaInstagram
        
        size={24} color="black" />
      <FaTwitter
        size={24} color="black" />
        </Box>
      </Box>
      <Box
      w="20%"
      mr="20px"
      mt="10px"
      >
        <FormControl>
            <Input 
            my="10px"
            backgroundColor="white"
            placeholder='Enter your Email'

            />
            <Textarea 
             my="10px"
             backgroundColor="white"
            placeholder='Enter your query'
            >
                </Textarea> 
            <Button
             my="10px"
            borderRadius={0}
            p="4px 40px"
            >SUBMIT</Button>
           
            
            
        </FormControl>
      </Box>
    </Box>
  )
}

export default ContactUs
