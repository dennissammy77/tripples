'use client'
import { Box, Center, Flex, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react';
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

function Qoute() {
  return (
    <Box bg='#11181F' p='10'>
        <Flex w='full' justifyContent={'center'} align={'center'} flexDirection={{base:'column',md:'row'}}>
            <Image src='../../assests/quote-1.jpg' boxSize={{base:300,md:500}} alt='quote_img' objectFit={'cover'}/>
            <Box color='#fff' mx={{base:'',md:'8'}} my={{base:'4',md:''}}>
                <Icon boxSize={'4'} as={ImQuotesLeft}/>
                <Text fontSize={{base:'large',md:'xxx-large'}} fontWeight={'bold'}>real magic is a sip away.</Text>
                <Icon boxSize={'4'} as={ImQuotesRight}/>
                <Text mt='4'>- Gregory Simba, Owner</Text>
            </Box> 
        </Flex>
    </Box>
  )
}

export default Qoute