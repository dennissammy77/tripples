'use client'
import { Box, Center, Flex, GridItem, HStack, Icon, Input, SimpleGrid, Text, Textarea, VisuallyHidden } from '@chakra-ui/react';
import React from 'react';
import { FaPhone, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import Link from 'next/link';

function Contact() {
  return (
    <Box px={8} py={24} mx="auto">
        <SimpleGrid alignItems="center" w={{ base: "full", xl: 11 / 12, }} columns={{ base: 1, lg: 11,}} gap={{ base: 0, lg: 24, }} mx="auto" >
            <GridItem colSpan={{ base: "auto", lg: 7,}} textAlign={{ base: "center", lg: "left"}}>
                <Text mb={4} fontSize={{ base: "3xl", md: "4xl", }} fontWeight="bold" lineHeight={{base: "shorter",md: "none",}} color="gray.900" letterSpacing={{ base: "normal",md: "tight"}}>
                    Let us chat
                </Text>
                <Text mb={{ base: 10, md: 4, }} fontSize={{ base: "lg", md: "xl", }} fontWeight="thin" color="gray.500" letterSpacing="wider">
                    Questions, comments or requests?<br/>
                    Feel free to reach out, <br/>we would love to hear from you.
                </Text>
            </GridItem>
            <GridItem colSpan={{ base: "auto", md: 4}} w='full'>
                <HStack color='' my='4' w='full'>
                    <Icon as={MdOutlineMail} boxSize={'4'}/>
                    <Link href='mailto:trippleske@gmail.com' isExternal>
                        trippleske@gmail.com
                    </Link>
                </HStack>
                <HStack color='' my='4' w='full'>
                    <Icon as={FaWhatsapp} boxSize={'4'}/>
                    <Link href='whatsapp://send?phone=+254705595902' isExternal>
                        +254705595902
                    </Link>
                </HStack>
                <HStack color='' my='4' w='full'>
                    <Icon as={FaPhone} boxSize={'4'}/>
                    <Link href='tel:+254705595902' isExternal>
                        +254705595902
                    </Link>
                </HStack>
                <HStack color='' my='4' w='full'>
                    <Icon as={BsInstagram} boxSize={'4'}/>
                    <Link href='https://www.instagram.com/_t.r.i.p.p.l.e.s_/' isExternal>
                        _t.r.i.p.p.l.e.s_
                    </Link>
                </HStack>
                <HStack color='' my='4' w='full'>
                    <Icon as={FaTiktok} boxSize={'4'}/>
                    <Link href='https://www.tiktok.com/@tripples.cocktail?_t=8gngZy3R8Q2&_r=1' isExternal>
                        _t.r.i.p.p.l.e.s_
                    </Link>
                </HStack>
            </GridItem>
        </SimpleGrid>
    </Box>
  )
}

export default Contact