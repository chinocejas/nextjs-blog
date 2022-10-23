import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';  
import SocialIcons from '../SocialIcons/SocialIcons';
import BadgeCustom from '../BadgeCustom/BadgeCustom';
  
  export default function SocialProfileSimple() {
    return (
      <Center py={6}> 
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
              'https://pbs.twimg.com/profile_images/1548722091788312579/yyBhWRqb_400x400.jpg'
            }
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
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Nicolas Cejas
          </Heading>          
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Software developer             
          </Text>
  
          <Stack align={'center'} justify={'center'} direction={'row'} mt={4}>
            <BadgeCustom name="backend"></BadgeCustom>
            <BadgeCustom name="net"></BadgeCustom>
            <BadgeCustom name="sql"></BadgeCustom>
            <BadgeCustom name="azure"></BadgeCustom>            
          </Stack>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={3}>
            <BadgeCustom name="HTML&CSS"></BadgeCustom>
            <BadgeCustom name="Javascript"></BadgeCustom>
            <BadgeCustom name="Jquery"></BadgeCustom>            
          </Stack>
          <Stack mt={3} direction={'row'} spacing={2}>
            <SocialIcons></SocialIcons>
          </Stack>
        </Box>
      </Center>
    );
  }