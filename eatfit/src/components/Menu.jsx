import React, { useEffect, useState } from 'react'
import { Box, Grid, GridItem, Text, Image, Center, Button } from '@chakra-ui/react';




// created array of objects and each object is having single food details
const foodItems = [
    {
        id : 1,
        name : "Food-1",
        image : "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/EAT1505/primary/5_1.jpg",
        desc : "494 cal | high fiber",
        category : "non-vegan",
        price : 175
    },
    {
        id : 2,
        name : "Food-2",
        image : "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/EAT1505/primary/5_1.jpg",
        desc : "494 cal | high fiber",
        category : "vegan",
        price : 180
    },
    {
        id : 3,
        name : "Food-3",
        image : "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/EAT1505/primary/5_1.jpg",
        desc : "494 cal | high fiber",
        category : "non-vegan",
        price : 125
    },
    {
        id : 4,
        name : "Food-4",
        image : "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/EAT1505/primary/5_1.jpg",
        desc : "494 cal | high fiber",
        category : "vegan",
        price : 100
    },
    {
        id : 5,
        name : "Food-5",
        image : "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/EAT1505/primary/5_1.jpg",
        desc : "494 cal | high fiber",
        category : "vegan",
        price : 205
    },
    {
        id : 6,
        name : "Food-6",
        image : "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/EAT1505/primary/5_1.jpg",
        desc : "494 cal | high fiber",
        category : "non-vegan",
        price : 197
    },
    {
        id : 7,
        name : "Food-7",
        image : "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/EAT1505/primary/5_1.jpg",
        desc : "494 cal | high fiber",
        category : "non-vegan",
        price : 171
    },
    {
        id : 8,
        name : "Food-8",
        image : "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/EAT1505/primary/5_1.jpg",
        desc : "494 cal | high fiber",
        category : "vegan",
        price : 145
    },
    {
        id : 9,
        name : "Food-9",
        image : "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/EAT1505/primary/5_1.jpg",
        desc : "494 cal | high fiber",
        category : "non-vegan",
        price : 275
    },
    {
        id : 10,
        name : "Food-10",
        image : "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/EAT1505/primary/5_1.jpg",
        desc : "494 cal | high fiber",
        category : "non-vegan",
        price : 190
    }

]
const Menu = () => {
    const [sortByPrice, setSortByPrice] = useState(0);
    const [showVegan, setShowVegan] = useState(false);
    const [showNonVegan, setShowNonVegan] = useState(false);


    // logic for sorting and filtering----------


    const handleSortByPrice = () => {
        setSortByPrice((prevValue) => prevValue === 1 ? 2 : 1);
      };
    
      const handleToggleVegan = () => {
        setShowVegan((prevValue) => !prevValue);
      };
    
      const handleToggleNonVegan = () => {
        setShowNonVegan((prevValue) => !prevValue);
      };



    
      let sortedAndFilteredProducts = [...foodItems];
    
      if (sortByPrice === 1) {
        sortedAndFilteredProducts = sortedAndFilteredProducts.sort((a, b) => a.price - b.price);
      } else if (sortByPrice === 2) {
        sortedAndFilteredProducts = sortedAndFilteredProducts.sort((a, b) => b.price - a.price);
      }
    
      sortedAndFilteredProducts = sortedAndFilteredProducts.filter((product) => {
        if (showVegan && showNonVegan) {
          return true;
        } else if (showVegan) {
          return product.category === 'vegan';
        } else if (showNonVegan) {
          return product.category === 'non-vegan';
        }
        return true;
      });
    

   
  return (
    <Box mx={20}
    mt="-80px"
    mb="10px"
    fontFamily="monospace"
    >
          <Box
          textAlign="left"
          >
        <Button
         size="xs"
         mx="1px"
         colorScheme='purple'
         borderRadius="none"
        onClick={handleSortByPrice}>
          Sort by Price {sortByPrice ? '(Descending)' : '(Ascending)'}
        </Button>
        <Button
        size="xs"
        mx="1px"
        colorScheme='purple'
        borderRadius="none"
        onClick={handleToggleVegan}>
          {showVegan ? 'Hide Vegan' : 'Show Vegan'}
        </Button>
        <Button
        size="xs"
        mx="1px"
        colorScheme='purple'
        borderRadius="none"
        onClick={handleToggleNonVegan}>
          {showNonVegan ? 'Hide Non-Vegan' : 'Show Non-Vegan'}
        </Button>
      </Box>
      
         
    
        <Grid
         templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
         gap={4}
        >
            {/* all the food products with sorting and filtering functionality will appear here to display on screen */}
             {sortedAndFilteredProducts.map((item) => (
          <GridItem key={item.id}>
            <Box
              bg="white"
            
              borderRadius="md"
              boxShadow="lg"
              p={4}
              
              transition="box-shadow 0.7s ease"
              align="left"
            >
              <Center>
                <Image 
                _hover={{ p:"3%" }}
                transitionDuration="0.7s"
                src={item.image} alt={item.name} />
              </Center>
              <Text 
              align="left"
              mt={4} fontWeight="bold">
                {item.name}
              </Text>
              <Text align="left" fontSize="sm">{item.desc}</Text>
              <Text align="left" mt={2} color="red">
                Price: Rs. {item.price}
              </Text>
              <Text align="left" mt={2} color="gray.600">
                Category: {item.category}
              </Text>
              <Button
              size="xs"
              mt={4}
              colorScheme='purple'
              borderRadius={0}
              p="4px 30px"
              
              >BUY</Button>
            </Box>
          </GridItem>
        ))}

        </Grid>

    </Box>
  )
}

export default Menu
