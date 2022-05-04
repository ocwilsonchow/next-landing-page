import { Flex } from "@chakra-ui/react";
import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <Flex flexDir="column">
      <NavBar />
      <Flex w="full" px={10}  justifyContent="center">
        <Flex w="full" maxW="1000px">{children}</Flex>
      </Flex>
      <Flex h="200px">

      </Flex>
    </Flex>
  );
};

export default Layout;
