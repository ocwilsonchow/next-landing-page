import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <Flex flexDir="column">
      <NavBar />
      <Flex w="full" px={10} justifyContent="center">
        <Flex w="full" maxW="1000px">
          {children}
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Layout;
