import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Box mb="30px"
    w="100%"
    h="60px"
    backgroundColor="purple"
    display="flex"
    alignItems="center"
    gap="40px"
    >
        <Image mx="20px" src="https://djgt4pi2uqo7n.cloudfront.net/prod/assets/images/eatfit-logo-horizontal.svg" width="130px"/>
        <Box
        fontFamily="monospace"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="40px"
        color="white"
        >
            <Text>Meal Plans</Text>
            <Text>Search</Text>
            <Text>Food Pass</Text>
        </Box>
      
    </Box>
  )
}

export default Navbar
