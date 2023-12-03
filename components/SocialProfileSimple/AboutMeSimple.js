import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';  
import BadgeCustom from '../BadgeCustom/BadgeCustom';
import SocialIconsSmall from '../SocialIcons/SocialIconsSmall';
import ToggleTheme from '../Common/ToggleTheme';
import NextLink from 'next/link';
  export default function SocialProfileSimple() {
    return (
      
      <Center py={1}> 
        <Box
          maxW={'480'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          marginTop={7}
          textAlign={'center'}>
          <Link as={NextLink} href='/'> 
            <Avatar
              size={'x1'}
              src={'images/nicoprofile.jpg'}
              mb={2}
              pos={'relative'}
            />
          </Link>
          
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            About me
          </Heading>          
          <Text
            textAlign={'left'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={5}
            margin={3}>
            Born in Argentina, I recently planted my roots in the charming landscapes of Italy. 
            As a seasoned software developer with several years of hands-on experience, 
            I honed my skills through studies at the UTN FRSF in Argentina.
            Beyond the world of code, you'll find me chasing footballs on the field, embracing the 
            intensity of crossfit, and indulging my love for travel, exploring new cultures and meeting
            fascinating people.
            In my moments away from tech and fitness, 
            I transform into a virtual shutterbug, 
            capturing moments with my phone and diving into the art of mobile photo editing. 
          </Text>
  
         
          <Center>
            <SocialIconsSmall></SocialIconsSmall>
          </Center>
        </Box>
      </Center>
    );
  }