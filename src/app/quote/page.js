'use client'
import { Box, Center, Flex, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react';
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

function Qoute() {
  return (
    <Box bg='#11181F' p='10'>
        <Flex w='full' justifyContent={'center'} align={'center'}>
            <Image src='../../assests/quote.jpg' boxSize={500} alt='quote_img' objectFit={'cover'}/>
            <Box color='#fff' mx='8'>
                <Icon boxSize={'4'} as={ImQuotesLeft}/>
                <Text fontSize={'xxx-large'} fontWeight={'bold'}>Life is better with<br/> a little fizz and<br/> cocktail bliss.</Text>
                <Icon boxSize={'4'} as={ImQuotesRight}/>
                <Text mt='4'>- Gregory Simba, Business owner</Text>
            </Box> 
        </Flex>
    </Box>
  )
}

export default Qoute