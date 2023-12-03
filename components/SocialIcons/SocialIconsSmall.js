import { BsGoogle, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import { Button, Center, Flex, HStack, Link, Spacer } from "@chakra-ui/react";
import { MdPhotoCamera } from "react-icons/md";

export default function SocialIconsSmall() {

  return (
    <Flex alignItems='center' justifyContent='center'>
    <HStack spacing={10} margin={3}>

      {/* Google */}
      <Link href="mailto:nico.cejas@gmail.com" isExternal>
        <BsGoogle />
      </Link>

      {/* LinkedIn */}
      <Link href="https://www.linkedin.com/in/nicocejas" isExternal>
        <BsLinkedin />
      </Link>

      {/* Instagram */}
      <Link href="https://www.instagram.com/nico.cjas/" isExternal>
        <BsInstagram />
      </Link>
 
      {/* Twitter */}
      <Link href="https://twitter.com/chinocejas" isExternal>
        <BsTwitter />
      </Link>
      {/* EyeEm Photos */}
      <Link href="https://www.eyeem.com/u/nicocejas" isExternal>
        <MdPhotoCamera />
      </Link>
    </HStack>
  </Flex>
    
  );
}
