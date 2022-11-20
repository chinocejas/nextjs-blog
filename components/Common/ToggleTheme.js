import { useColorMode, Button } from "@chakra-ui/react";
import { BsMoon } from "react-icons/bs";

export default function ToggleTheme() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
      <Button
        onClick={toggleColorMode}
        w={"full"}
        variant='ghost'
        fontSize={12}
        marginBottom={2}
        colorScheme={"gray"}
        leftIcon={<BsMoon />}
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
  );
}
