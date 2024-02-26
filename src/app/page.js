'use client'
import { Box, HStack, Icon, Image, Text } from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Signatures from "./signatures/page";

export default function Home() {
  return (
    <Box>
      <Box position={'relative'}>
        <Image src='../assests/home_bg.jpg' alt='home background' w='full' h='80vh' objectFit={'cover'}/>
        <Box position={'absolute'} top='40%' left='10vw' fontSize={'xxx-large'} fontWeight={'bold'} color='#fff'>
          <Text>Real Magic is a sip<br/>away</Text>
          <HStack alignItems={'center'} my='6' cursor={'pointer'}>
            <Text fontSize={'large'} transition='.6s ease-in-out' _hover={{borderBottom:'1px solid #fff'}}>Book a session</Text>
            <Icon as={FaLongArrowAltRight} boxSize='6' color='#fff'/>
          </HStack>
        </Box>
      </Box>
      <Signatures/>
    </Box>
  );
}
