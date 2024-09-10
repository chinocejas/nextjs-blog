import { BsGoogle, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import { Button, Center, Flex, HStack, Link, Spacer } from "@chakra-ui/react";
import { MdPhotoCamera } from "react-icons/md";
import { logEvent } from "../utils/analytics";
import { PiReadCvLogo } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

export default function SocialIconsSmall() {
  const handleSocialIconClick = (socialPlatform) => {
    logEvent({
      category: "Social Link Click",
      action: "Click",
      label: socialPlatform,
    });
  };


  return (
    <HStack spacing={8} margin={2} justifyContent={"center"}>
      {/* Google */}
      <Link
        href="mailto:nico.cejas@gmail.com"
        isExternal
        onClick={() => handleSocialIconClick("Google")}
      >
        <BsGoogle />
      </Link>

      {/* LinkedIn */}
      <Link
        href="https://www.linkedin.com/in/nicocejas"
        isExternal
        onClick={() => handleSocialIconClick("LinkedIn")}
      >
        <BsLinkedin />
      </Link>

       {/* Github */}
       <Link
        href="https://github.com/chinocejas"
        isExternal
        onClick={() => handleSocialIconClick("github")}
      >
        <FaGithub  /> 
      </Link>

      {/* Curriculum vitae */}
      <Link
        href="https://github.com/chinocejas/resume/blob/master/nicolas_cejas_resume.pdf"
        isExternal
        onClick={() => handleSocialIconClick("curriculumvitae")}
      >
        <PiReadCvLogo /> 
      </Link>

      {/* Instagram */}
      <Link
        href="https://www.instagram.com/nico.cjas/"
        isExternal
        onClick={() => handleSocialIconClick("Instagram")}
      >
        <BsInstagram />
      </Link>

      {/* EyeEm Photos */}
      <Link
        href="https://www.eyeem.com/u/nicocejas"
        isExternal
        onClick={() => handleSocialIconClick("EyeEm")}
      >
        <MdPhotoCamera />
      </Link>
    </HStack>
  );
}
