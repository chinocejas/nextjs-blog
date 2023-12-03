import {BsGoogle, BsTwitter, BsLinkedin, BsInstagram} from 'react-icons/bs'
import { Button, Center, Stack, Text } from '@chakra-ui/react';

export default function SocialIcons()
{
    return (       
        <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
          {/* Twitter */}
          <Button w={'full'} colorScheme={'gray'} leftIcon={<BsTwitter />}>
            <Center>
                <a href="https://twitter.com/chinocejas" target="_blank" rel="noopener noreferrer">
                    <Text> 
                        chinocejas
                    </Text>
                </a>
            </Center>
          </Button>
  
          {/* Google */}
          <Button w={'full'} colorScheme={'gray'} variant={'outline'} leftIcon={<BsGoogle />}>
            <Center>
                <a href="mailto: nico.cejas@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Text> 
                        nico.cejas
                    </Text>
                </a>
            </Center>
          </Button>
  
          {/* LinkedIn */}          
            <Button w={'full'} colorScheme={'gray'} leftIcon={<BsLinkedin />}  >
                <Center>
                    <a href="https://www.linkedin.com/in/nicocejas" target="_blank" rel="noopener noreferrer">
                        <Text> 
                            nicocejas
                        </Text>
                    </a>                
                </Center>
            </Button>    
            {/* Instagram */}          
             <Button w={'full'} colorScheme={'gray'} leftIcon={<BsInstagram />}  >
                <Center>
                    <a href="https://www.instagram.com/nico.cjas/" target="_blank" rel="noopener noreferrer">
                        <Text> 
                            chinocejas
                        </Text>
                    </a>                
                </Center>
            </Button> 
             {/* EyeEm */}          
             <Button w={'full'} colorScheme={'gray'} leftIcon={<BsInstagram />}  >
                <Center>
                    <a href="https://www.instagram.com/nico.cjas/" target="_blank" rel="noopener noreferrer">
                        <Text> 
                            chinocejas
                        </Text>
                    </a>                
                </Center>
            </Button>                         
        </Stack>
    ); 
}