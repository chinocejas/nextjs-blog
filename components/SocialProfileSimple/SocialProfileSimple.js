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
    let badgeCustomPrefix = '#';

    return (
      
      <Center py={6}> 
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          marginTop={7}
          textAlign={'center'}>
          <ToggleTheme></ToggleTheme>
          <Link as={NextLink} href='/About'> 
            <Avatar
              size={'xl'}
              src={'images/nicoprofile.jpg'}
              alt={'Avatar Alt'}
              mb={4}
              pos={'relative'}
              _after={{
                content: '""',
                w: 4,
                h: 4,
                bg: 'green.300',
                border: '2px solid white',
                rounded: 'full',
                pos: 'absolute',
                bottom: 0,
                right: 3,
              }}
            />
          </Link>
          
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Nicolas Cejas
          </Heading>          
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={5}>
            I'm a software developer with a focus on backend development.
            <span> 🇦🇷</span>  
          </Text>
  
          <Stack align={'center'} justify={'center'} direction={'row'} mt={4}>
            <BadgeCustom prefix= {badgeCustomPrefix} name="backend"></BadgeCustom>
            <BadgeCustom prefix= {badgeCustomPrefix} name="net"></BadgeCustom>
            <BadgeCustom prefix= {badgeCustomPrefix} name="sql"></BadgeCustom>
            <BadgeCustom prefix= {badgeCustomPrefix} name="azure"></BadgeCustom>            
          </Stack>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={3}>
            <BadgeCustom prefix= {badgeCustomPrefix} name="HTML&CSS"></BadgeCustom>
            <BadgeCustom prefix= {badgeCustomPrefix} name="Javascript"></BadgeCustom>
            <BadgeCustom prefix= {badgeCustomPrefix} name="Jquery"></BadgeCustom>            
          </Stack>
          <Stack mt={5} direction={'row'} spacing={2} align={'center'}>
            <SocialIconsSmall></SocialIconsSmall>
          </Stack>
        </Box>
      </Center>
    );
  }