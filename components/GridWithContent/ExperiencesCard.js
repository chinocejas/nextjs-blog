  import {
    Avatar,
    Box,
    Flex,
    VStack,
    Text ,
    Stack,
  } from '@chakra-ui/react';

  import BadgeCustom from '../BadgeCustom/BadgeCustom';

  export default function ExperiencesCard(props) {
    const { name, role, avatar, proyects, technologies, startDate, endDate } = props;
    return (
      <>
      <Box
        boxShadow={'lg'}
        maxW={'640px'}
        direction={{ base: 'column-reverse', md: 'row' }}
        width={'full'}
        rounded={'x5'}
        p={7}
        justifyContent={'space-between'}
        position={'relative'}>
          
          <Flex
            direction={['column', 'column', 'row']} 
            w="full" 
            px={6} 
            align="center"
          >
            
            <Box
              alignContent={'left'}
              justifyContent={'full'}
              w={'full'}  
              textAlign={'left'}>
              <Text  
                fontWeight={'bold'} 
                fontSize={16}>
                {name}
              </Text>

              <Text
                  fontWeight={'normal'}
                  color={'gray.400'}>
                    {getDateToShow(startDate,endDate)}                  
                </Text>
                <Text 
                    fontWeight={'medium'}
                    color={'gray.500'}>
                    {role}
                </Text>
            </Box>

            <Avatar
              src={avatar}
              height={'70px'}
              width={'70px'}
              m={{ base: '20px 0 15px 0', md: '0 0 0 0px' }}
            />
            
          </Flex>
          <VStack 
            direction={['column', 'column', 'row']} 
            w="full" 
            px={6} 
            align="center"
          >
                <Box 
                  marginTop={4}
                  align='left'
                  fontWeight={'thin'}
                  fontSize={'15px'}
                  pb={2}>
                      {
                        proyects &&
                        proyects.map((proyect) => (
                          <VStack key={proyect.id} align={'center'}>
                            <Text
                              fontWeight={'normal'}
                              color={'gray.400'}
                              p={2}>
                              {proyect.name} - {proyect.description}
                            </Text>
                            
                          
                          </VStack>
                            
                          ))
                      }
                </Box >
         
          </VStack>
      
        <Stack 
          align={'center'} 
          justify={'center'} 
          direction={'row'} 
          mt={4} 
          display='block'
          p={1}>
            {
            technologies && 
            technologies.map((technology) => (
              <BadgeCustom prefix= {''} name={technology} key={technology}></BadgeCustom>
            ))
          }
        </Stack>


      </Box>

      </>
    );

    function getDateToShow(startDate,endDate){
      const options = { year: 'numeric', month: 'long' };
      const start = new Date(startDate);
      const end = new Date(endDate);
      const startString = start.toLocaleDateString('en-US', options);
      const endString = endDate != null ? end.toLocaleDateString('en-US', options) : "present";
      const dateToShow = startString + ' - ' + endString;
      return dateToShow;
    }
  }