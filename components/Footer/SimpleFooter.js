import {
    Flex,
    HStack,
    Spacer,
    Text,
    useColorModeValue,
    Link
  } from '@chakra-ui/react'
import { HiHome } from "react-icons/hi";
import NextLink from 'next/link'
  
  export default function SimpleFooter()  {
    const bg = useColorModeValue('gray.100', 'gray.800')
  
    return (
      <footer>
        <Flex direction={['column', 'column', 'row']} w="full" px={6} align="center" bg={bg}>
          <Spacer />
          <Text fontSize="sm"> 
            🧑‍💻developed by {" "}
            <Link href="https://github.com/chinocejas/personalCardPage" isExternal>
                me
            </Link>
          </Text>
          <Spacer />
          <HStack spacing={4} padding={3}>
            <Link  as={NextLink} href='/'>
                <HiHome></HiHome>
            </Link>
          </HStack>
        </Flex>
      </footer>
    );
  }

