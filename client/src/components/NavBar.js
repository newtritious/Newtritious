import React from 'react';
import {
  Container,
  Box,
  Image,
  Button,
  ButtonGroup,
  Flex,
  Spacer
} from '@chakra-ui/react';

function NavBar() {
  return (
    <Container w="80%" maxW="1200px" bg="white">
      <Flex align="center" justify="space-between" mt={5} mb={5}>
        <Image maxW="100%" src="/images/logo-vert.png" alt="Newtritious Logo" />
        <Button bg="#141F47" color="white">
          Log In
        </Button>
      </Flex>
    </Container>
  );
}

export default NavBar;
