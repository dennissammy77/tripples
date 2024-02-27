'use client'
import { Box, HStack, Icon, Image, Text } from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Signatures from "./signatures/page";
import Qoute from "./quote/page";
import Collage from "./collage/page";
import Contact from "./contact/page";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <Box>
      <Box position={'relative'}>
        <Image src='../assests/home_bg.jpg' alt='home background' w='full' h='90vh' objectFit={'cover'}/>
        <Box position={'absolute'} top='40%' left='10vw' fontSize={'xxx-large'} fontWeight={'bold'} color='#fff'>
          <Text>Real Magic is a sip<br/>away</Text>
          <HStack alignItems={'center'} my='6' cursor={'pointer'}>
            <Text fontSize={'large'} transition='.6s ease-in-out' _hover={{borderBottom:'1px solid #fff'}} onClick={(()=>{router.push('/contact')})}>Book a session</Text>
            <Icon as={FaLongArrowAltRight} boxSize='6' color='#fff'/>
          </HStack>
        </Box>
      </Box>
      <Signatures/>
      <Qoute/>
      <Collage/>
      <Contact/>
    </Box>
  );
}
