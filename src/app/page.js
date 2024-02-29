'use client'
import { AbsoluteCenter, Box, Divider, Grid, GridItem, HStack, Icon, Image, Text } from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Signatures from "./signatures/page";
import Qoute from "./quote/page";
import Collage from "./collage/page";
import Contact from "./contact/page";
import { useRouter } from "next/navigation";
import { InstagramEmbed } from 'react-social-media-embed';

export default function Home() {
  const router = useRouter();
  return (
    <Box>
      <Box position={'relative'} w='full'>
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
      <Box position='relative' padding='10'>
        <Divider />
        <AbsoluteCenter bg='white' px='4'>
          <Text fontSize='xx-large' fontStyle='italic' textAlign={'center'}>From our Clients</Text>
        </AbsoluteCenter>
      </Box>
      <Grid templateRows={{base:'repeat(4, 1fr)',md:'repeat(1, 1fr)'}} templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(4, 1fr)'}} gap={4} w='full' h='full' p='6'>
        <InstagramEmbed url="https://www.instagram.com/p/CydIAc-sBcR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} />
        <InstagramEmbed url="https://www.instagram.com/p/Cz5gCpMCd8i/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} />
        <InstagramEmbed url="https://www.instagram.com/p/C2g1zPlCQPD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} />
        <InstagramEmbed url="https://www.instagram.com/p/C3YLpGmCFnB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} />
      </Grid>
      <Contact/>
      {/**
       * 
       */}
    </Box>
  );
}
