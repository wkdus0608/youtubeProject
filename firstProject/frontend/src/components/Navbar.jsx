import {
  Container,
  Flex,
  Text,
  HStack,
  // Link as ChakraLink,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { CiSquarePlus } from 'react-icons/ci';
import { IoMoon } from 'react-icons/io5';
import { LuSun } from 'react-icons/lu';
// import { useProductStore } from './store/product';
// 오류 발생시 ../st로 변경해볼 것.

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { products } = useProductStore();

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
          <Link to='/'>Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={'center'}>
          <Link to='/create'>
            <Button>
              <CiSquarePlus fontSize={20} />
            </Button>
          </Link>

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
