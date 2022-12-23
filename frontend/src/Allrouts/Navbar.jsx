import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
    
  return (
    <Flex pl='30px'  fontFamily={'inter'} fontWeight='800' fontSize={'48px'} lineHeight='58px' justifyContent={"flex-start"} alignItems='center' h='143px' bg={'#E9E9E9'}>
      <Heading as={'h1'}>Eqaim Blog</Heading>
    </Flex>
  )
}

export default Navbar
