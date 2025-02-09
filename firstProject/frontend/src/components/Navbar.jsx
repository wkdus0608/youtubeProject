import {
  Container,
  Flex,
  Text,
  HStack,
  Link as ChakraLink,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { CiSquarePlus } from 'react-icons/ci';
import { IoMoon } from 'react-icons/io5';
import { LuSun } from 'react-icons/lu';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

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
              <CiSquarePlus fontSize={20} />
            </Button>
          </ChakraLink>

          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <IoMoon /> : <LuSun />}
          </Button>
        </HStack>
      </Flex>
      NavBar
    </Container>
  );
};

export default Navbar;
