'use client'
import { Box, Button, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaLongArrowAltRight, FaTiktok } from 'react-icons/fa';


export default function Header() {
  const router = useRouter()
  return (
    <Flex w='full' padding={{base:'4',md:'6'}} align={'center'} justifyContent='space-between'>
        <Text onClick={(()=>{router.push('/')})} fontSize={'x-large'} fontWeight={'bold'}>Tripples</Text>
        <HStack align={'center'}>
            {/**
             * 
             */}
            <HStack alignItems={'center'} my='6' cursor={'pointer'} bg='#11181F' p='4' borderRadius={'md'}>
                <Text color='#fff' fontSize={'large'} onClick={(()=>{router.push('/contact')})}>Book a session</Text>
            </HStack>
            <HStack color='' my='4'>
                <Link href='https://www.instagram.com/_t.r.i.p.p.l.e.s_/' isExternal>
                    <Icon as={BsInstagram} boxSize={'4'}/>
                </Link>
            </HStack>
            <HStack color='' my='4'>
                <Link href='https://www.tiktok.com/@tripples.cocktail?_t=8gngZy3R8Q2&_r=1' isExternal>
                    <Icon as={FaTiktok} boxSize={'4'}/>
                </Link>
            </HStack>
        </HStack>
    </Flex>
  )
}