import {
  Container,
  Flex,
  Text,
  HStack,
  Link as ChakraLink,
  Button,
} from '@chakra-ui/react';
import React from 'react';
// import { Link } from 'react-router-dom';
// import { Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
// import { PlusSquareIcon } from '@chakra-ui/icons';  // 추가


const Navbar = () => {
  return (
    <Container maxW={'1140px'} px={4}>
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDir={{
          base: 'column',
          sm: 'row',
        }}
      >
        <Text
          fontSize={{ base: '22', sm: '28' }}
          fontWeight={'bold'}
          textTransform={'uppercase'}
          textAlign={'center'}
          bgGradient={'linear(to-r, cyan.400, blue.500)'}
          bgClip={'text'}
        >
          <ChakraLink as={RouterLink} to='/'>
            Product Store 🛒
          </ChakraLink>
        </Text>

        <HStack spacing={2} alignItems={'center'}>
          <ChakraLink as={RouterLink} to='/create'>
            <Button>
              {/* <PlusSquareIcon /> */}
            </Button>
          </ChakraLink>
        </HStack>
      </Flex>
      NavBar
    </Container>
  );
};

export default Navbar;
