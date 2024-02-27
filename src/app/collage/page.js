import { Grid, GridItem, Image } from '@chakra-ui/react'
import React from 'react'

function Collage() {
  return (
    <Grid h='' templateRows='repeat(2, 1fr)' templateColumns='repeat(4, 1fr)' gap={4} p='10'>
        <GridItem rowSpan={2} colSpan={2}>
            <Image src='../../assests/collage-1.jpg' w='full' h='full' alt='image' objectFit={'cover'}/>
        </GridItem>
        <GridItem colSpan={1}>
            <Image src='../../assests/collage-2.jpg' w='full' h='full' alt='image' objectFit={'cover'}/>
        </GridItem>
        <GridItem colSpan={1}>
            <Image src='../../assests/collage-3.jpg' w='full' h='full' alt='image' objectFit={'cover'}/>
        </GridItem>
        <GridItem colSpan={1}>
            <Image src='../../assests/collage-4.jpg' w='full' h='full' alt='image' objectFit={'cover'}/>
        </GridItem>
        <GridItem colSpan={1}>
            <Image src='../../assests/collage-5.jpg' w='full' h='full' alt='image' objectFit={'cover'}/>
        </GridItem>
    </Grid>
  )
}

export default Collage