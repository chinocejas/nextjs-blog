import {
  Box,
  Flex,
  VStack,
  Spacer,
  ButtonGroup,
  Heading,
  SimpleGrid
} from '@chakra-ui/react';
import ExperiencesCard from './ExperiencesCard'
import ToggleTheme  from '../Common/ToggleTheme';
const jobExperiences = [
  {
    id: 1, 
    name: 'Clarika Software + Innovation',
    role: 'Software developer',
    content: "I'm working for Clarika",
    startDate: '11/11/2021',
    endDate:null,   
    avatar:
      'https://media.licdn.com/dms/image/C4D0BAQHF25xbzzWuvg/company-logo_200_200/0/1632254013235?e=1689811200&v=beta&t=VeVY9hrPnME2p8ht_TuT9ry_hDXIPp1LzooeZq-qN2o',
    proyects:[
      {
        id:1,
        name:"DAC Group - LPAD",
        description:"This is a legacy project that presents a great opportunity for me to improve and redesign the existing functionalities and make the UI more user-friendly. I work closely with other teams and use a range of APIs, topics, and queues to ensure smooth communication and collaboration.",
        
      }
    ],
    technologies:["C#","NET Core", "Net Framework", "razor", "html/css", "jquery", "React", ]  
  },
  {
    id: 2, 
    name: 'PwC',
    startDate: '6/1/2020',
    endDate:'11/1/2021',   
    role: 'Software developer',
    avatar:
      'https://media.licdn.com/dms/image/C4E0BAQEMcCsKYUoUKw/company-logo_200_200/0/1658309646399?e=1689811200&v=beta&t=s_zyCazjJQtDwo9k0CXX0ZByMTDx3X2EmXQZvjgX_bs',
    proyects:[
      {
        id:1,
        name:"Taxes Api",
        description:"I was responsible for building a hub of APIs for taxes, which were designed for internal use within the company. This was primarily a backend project.",
       
      },
      {
        id:2,
        name:"Internal CRM",
        description:"I also worked on an MVC system that allowed clients to build their own portals. This project involved implementing numerous unit tests",
        
      }
    ],
    technologies:["C#","NET Core", "Azure Cloud", "Service Bus", "Net Framework", "ASP", "SDK", "unit test", "Razor", "Html/css", "Jquery", "REST/SOAP", "SQL"]  
  },
  {
    id: 3, 
    name: 'Accion Point Group',
    startDate: '4/4/2018',
    endDate:'6/6/2020',   
    role: 'Software developer',
    avatar:
      'https://media.licdn.com/dms/image/C4D0BAQHymuLMqto-jQ/company-logo_200_200/0/1656704209472?e=1689811200&v=beta&t=fFGkZhgLTC7JFvD_ReDZT7KLJur4--WXzJTlfrZjlEw',
    proyects:[
      {
        id:1,
        name:"Bantotal",
        description:"I started working for a core bank system in a software factory where I was responsible for developing customer requirements. I later had the opportunity to travel to many different places in my country to work with this system, but in a different capacity, as a technical analyst responsible for software implementation. This involved working closely with customers to ensure that the software was implemented correctly and that it met their needs.",
       
      },
      {
        id:2,
        name:"Hardware connections",
        description:"In addition to this work, I also had the opportunity to work on another project for another company's client, who built hardware incubators. In this project, we developed software that would read values from the hardware and process them on the server.",
        
      }
    ],
    technologies:["C#","NET", "WinForms", "NetCore", "SQL", "ORACLE", "Genexus", "AS400", "React", "Entity Framework", "Modbus", "Rest/Soap", "HTML" , "css"]  
  },
  {
    id: 4, 
    name: 'Government of Santa Fe',
    startDate: '12/12/2016',
    endDate:'6/7/2017',   
    role: 'Software developer',
    avatar:
      'https://media.licdn.com/dms/image/C560BAQHQAJPb1hW5UQ/company-logo_200_200/0/1519899192304?e=1689811200&v=beta&t=s7YHcNZitoEzNMByPwCEg9arjgpLPbR-8IsunDPw_C4',
    proyects:[
      {
        id:1,
        name:"Entry-level Technical Support",
        description:"In my first job, as entry-level Technical Support for University Partnership. I worked as functional analyst and technical support specialist, utilizing my skills in SQL queries to support the company's business operations.",
       
      }
    ],
    technologies:["SQL","System Analysis", "IT"]  
  }
];


export default function GridExperiences() {
  return (
    <Flex
      textAlign={'center'}
      pt={10}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}
      overflow={'hidden'}>
        
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Spacer />
          <ButtonGroup gap='2'>
            <ToggleTheme></ToggleTheme>
          </ButtonGroup>
        </Flex>

      <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
        <Heading as='h2'
          fontWeight={'bold'}
          fontSize={20}
          textTransform={'uppercase'}
          color={'purple.400'}>
          Curriculum Vitae
        </Heading>
        
        <Heading as='h5'
          margin={'auto'}
          width={'40%'}
          fontWeight={'medium'}>
         Nicolas Cejas
          
        </Heading>
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 1 }}
        spacing={'20'}
        mt={16}
        mb={16}
        mx={'auto'}>
        {
          jobExperiences.map((cardInfo) => (
            <VStack key={cardInfo.id} align={'top'}>
              <ExperiencesCard {...cardInfo} index={cardInfo.id} />
            </VStack>
              
            ))
        }
      </SimpleGrid>

    </Flex>
  );
}