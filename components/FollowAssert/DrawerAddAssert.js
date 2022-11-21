import React from "react";
import { IoIosAdd, IoAdd } from "react-icons/io";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useRef,
  IconButton,
  Button,
  AddIcon,
  Stack,
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
} from "@chakra-ui/react";

export default function DrawerAddAssert(props) {
  const { isOpen, onOpen, onClose, getDisclosureProps } = useDisclosure();
  const firstField = React.useRef();
  let assertList = props.assertList ;
  var modelAssert = {
    currency: "",
    type: "",
    accountWallet: "",
    value: "",
  };
  const [assertValue, setAssertValue] = React.useState(modelAssert);
  const [assertListValues] = React.useState(props.assertList);
  const setAssertListValues = props.setAssertListValues;
  //const assertListValues = props.assertList;
  const changeHandler = (e) => {
    const newAssertValue = { ...assertValue, [e.target.name]: e.currentTarget.value };
    setAssertValue(newAssertValue);
  };

  const submitNewAssert = () => {
    debugger;
    setAssertListValues(prevState => {
      console.log('prevState ' + JSON.stringify(prevState));
      prevState.push(assertValue)
    });
    console.log('newState ' + JSON.stringify(assertListValues));
    onClose();
  };

  return (
    <>
      <IconButton
        aria-label="Add Assert"
        icon={<IoIosAdd />}
        colorScheme="teal"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Create a new assert
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="currency">Currency</FormLabel>
                <Input
                  ref={firstField}
                  id="currency"
                  name="currency"
                  placeholder="BTC, USD, EUR.."
                  onChange={changeHandler}
                />
              </Box>
              <Box>
                <FormLabel htmlFor="accountWallet">Account/Wallet</FormLabel>
                <Input
                  id="accountWallet"
                  name="accountWallet"
                  placeholder="Binance, Wise.."
                  onChange={changeHandler}
                />
              </Box>

              <Box>
                <FormLabel htmlFor="type">Type</FormLabel>
                <Select
                  id="type"
                  name="type"
                  defaultValue="segun"
                  onChange={changeHandler}
                >
                  <option value="blank"></option>
                  <option value="crypto">Crypto</option>
                  <option value="fiat">Fiat</option>
                  <option value="stock">Stock</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="value">Value</FormLabel>
                <Input
                  id="value"
                  name="value"
                  placeholder="3000, 0.004 ..."
                  onChange={changeHandler}
                />
              </Box>

              <Box>
                <FormLabel htmlFor="note">Note</FormLabel>
                <Textarea id="note" name="note" onChange={changeHandler} />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={submitNewAssert}>
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
