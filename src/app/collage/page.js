'use client'
import { Grid, GridItem, Image } from '@chakra-ui/react'
import React from 'react'

function Collage() {
  return (
    <Grid h='' templateRows='repeat(2, 1fr)' templateColumns='repeat(4, 1fr)' gap={4} p='6'>
        <GridItem rowSpan={2} colSpan={2}>
            <Image src='../../assests/collage-6.jpg' w='full' h='full' alt='image' objectFit={'cover'}/>
        </GridItem>
        <GridItem colSpan={1}>
            <Image src='../../assests/quote.jpg' w='full' h='full' alt='image' objectFit={'cover'}/>
        </GridItem>
        <GridItem colSpan={1}>
            <Image src='../../assests/collage-3.jpg' w='full' h='full' alt='image' objectFit={'cover'}/>
        </GridItem>
        <GridItem colSpan={1}>
            <Image src='../../assests/collage-7.jpg' w='full' h='full' alt='image' objectFit={'cover'}/>
        </GridItem>
        <GridItem colSpan={1}>
            <Image src='../../assests/collage-8.jpg' w='full' h='full' alt='image' objectFit={'cover'}/>
        </GridItem>
    </Grid>
  )
}

export default Collage