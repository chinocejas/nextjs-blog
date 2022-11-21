import { IconButton, Button } from "@chakra-ui/react";
import { IoIosAdd, IoAdd} from "react-icons/io";

export default function ButtonAdd() {
  return (
    <IconButton aria-label='Search database' icon={<IoIosAdd />} />
  );
}
