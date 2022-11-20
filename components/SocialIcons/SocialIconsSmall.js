import { BsGoogle, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import { Button, Center, Flex, HStack, Link, Spacer } from "@chakra-ui/react";
import theme from "../../theme/default";

export default function SocialIconsSmall() {
  console.log(theme.config);

  return (
    <Flex minWidth='max-content' alignItems='center' gap='2'> 
    <HStack spacing={6} align={"center"} maxW={"md"} w={"full"} margin={3}>
    <Spacer />
          {/* Twitter */}
          <Center>
            <Link href="https://twitter.com/chinocejas" isExternal>
              <BsTwitter />
            </Link>
          </Center>
          <Spacer />
          {/* Google */}
          <Link href="mailto: nico.cejas@gmail.com" isExternal>
            <BsGoogle />
          </Link>
          <Spacer />
          {/* LinkedIn */}
          <Link href="https://www.linkedin.com/in/nicocejas" isExternal>
            <BsLinkedin />
          </Link>
          <Spacer />
          {/* Instagram */}
          <Link href="https://www.instagram.com/nico.cjas/" isExternal>
            <BsInstagram />
          </Link>
          <Spacer />
        </HStack>
    </Flex>
    
  );
}
