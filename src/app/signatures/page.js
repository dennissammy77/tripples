'use client'
import { Box, Center, HStack, Heading, Icon, Text } from '@chakra-ui/react';
import { BiSolidDrink } from "react-icons/bi";
import React from 'react'

function Signatures() {
  return (
    <Center>
        <Box border='1px solid #e3e3e3' borderRadius={'md'} p='6' my='10' w={{base:'90%',md:'90%',lg:'50%'}}>
            <Heading as='h1' my='8' textAlign={'center'}>SIGNATURES</Heading>
            {arr_signatures?.map((item,index)=>{
                return(
                    <HStack key={index} p='8'>
                        <Icon as={BiSolidDrink} boxSize={'4'} color='gray.300' mx='4'/>
                        <Box>
                            <Text fontWeight={'bold'} fontSize={'x-large'}>{item?.title}</Text>
                            <Text fontStyle={'italic'}>{item?.text}</Text>
                        </Box>
                    </HStack>
                )
            })}
        </Box>
    </Center>
  )
}

export default Signatures;

const arr_signatures=[
    {
        title:'SWEET KILLER',
        text:'Known as one of the many drinks that women indulge in. A combination of rum, gin, vodka, tequila and sweet sour taste.'
    },
    {
        title:'LONG ISLAND',
        text:'The little devil in you will be all smiles to hear you mention the American speech enhancing tea. Rum, tequila, gin, and vodka blended together with hints of lime & cola.'
    },
    {
        title:'MARGARITA',
        text:'Spice up your mood with a margarita kiss to ignite your taste buds with tequila in a range of flavours.'
    },
    {
        title:'DEVILS BABY',
        text:'Transport yourself to a euphoric paradise and indulge in a heavenly taste of the Devil’s baby. A recipe featuring tequila vodka cointreau with a red wine twist. ADULTS Only!!!'
    },
]