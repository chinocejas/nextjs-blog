import { BsGoogle, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import { Button, Center, Flex, HStack, Link, Spacer } from "@chakra-ui/react";
import { MdPhotoCamera } from "react-icons/md";
import { logEvent } from '../utils/analytics';

export default function SocialIconsSmall() {

  const handleSocialIconClick = (socialPlatform) => {
    logEvent({ category: 'Social Link Click', action: 'Click', label: socialPlatform });
  };

  return (
    <Flex alignItems='center' justifyContent='center'>
    <HStack spacing={10} margin={3}>
      {/* Twitter */}
      <Link href="https://twitter.com/chinocejas" isExternal onClick={() => handleSocialIconClick('Twitter')}>
        <BsTwitter />
      </Link>

      {/* Google */}
      <Link href="mailto:nico.cejas@gmail.com" isExternal onClick={() => handleSocialIconClick('Google')}>
        <BsGoogle />
      </Link>

      {/* LinkedIn */}
      <Link href="https://www.linkedin.com/in/nicocejas" isExternal onClick={() => handleSocialIconClick('LinkedIn')}>
        <BsLinkedin />
      </Link>

      {/* Instagram */}
      <Link href="https://www.instagram.com/nico.cjas/" isExternal onClick={() => handleSocialIconClick('Instagram')}>
        <BsInstagram />
      </Link>

      {/* EyeEm Photos */}
      <Link href="https://www.eyeem.com/u/nicocejas" isExternal onClick={() => handleSocialIconClick('EyeEm')}>
        <MdPhotoCamera />
      </Link>
    </HStack>
  </Flex>
    
  );
}
