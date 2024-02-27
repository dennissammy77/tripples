'use client'
import { Box, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react';


export default function Header() {
  const router = useRouter()
  return (
    <Flex w='full' padding={{base:'4',md:'10'}}>
        <Text onClick={(()=>{router.push('/')})}>Header</Text>
        <Text onClick={(()=>{router.push('/contact')})} mx='2'>Contact Us</Text>
        <Text>Header</Text>
    </Flex>
  )
}
