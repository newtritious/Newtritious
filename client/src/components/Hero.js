import React from 'react';
import {
  Container,
  Box,
  Image,
  AspectRatio,
  Input,
  InputGroup,
  InputLeftElement,
  Center,
  Button,
  ButtonGroup,
  Flex,
  Spacer
} from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';

function Hero() {
  return (
    <Box>
      <AspectRatio maxW="100%" ratio={6 / 2}>
        <Image
          src="/images/hero.jpg"
          alt="Cutting board background image"
          objectFit="cover"
        />
      </AspectRatio>

      <InputGroup w="50%" mx="auto" mt={-40} bg="#FFFFFF" borderRadius="10px">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="#B5B5B5" />}
        />
        <Input
          type=""
          placeholder="Find a recipe"
          _placeholder={{ opacity: 1, color: '#B5B5B5' }}
        />
      </InputGroup>
    </Box>
  );
}

export default Hero;
