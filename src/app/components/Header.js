'use client'
import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';


export default function Header() {
  const router = useRouter()
  return (
    <Flex w='full' padding={{base:'4',md:'10'}} align={'center'} justifyContent='space-between'>
        <Text onClick={(()=>{router.push('/')})} fontSize={'x-large'} fontWeight={'bold'}>Tripples</Text>
        <HStack align={'center'}>
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