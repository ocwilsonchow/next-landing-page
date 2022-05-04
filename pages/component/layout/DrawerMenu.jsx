import { useRef } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  IconButton
} from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'

const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <IconButton ref={btnRef} variant="ghost" icon={<HamburgerIcon />} onClick={onOpen} display={{sm: 'flex', md: "none"}}/>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>

        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
