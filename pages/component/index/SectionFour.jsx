import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";

const companies = ["Apple", "Google", "Meta", "Microsoft"];

const SectionFour = () => {
  return (
    <Box alignItems="center" borderRadius="xl" py={20} px={10} w="full" >
      <Text
        fontWeight="extrabold"
        fontSize="5xl"
        lineHeight="1"
        textAlign="center"
        mb={10}
      >
        Trusted by enterprises
      </Text>

      <Flex flexWrap="wrap" columnGap={4} rowGap={4} justifyContent="center">
        {companies.map((company, i) => (
          <Center key={i} w={150} p={4} bg="blue.500" color="white" borderRadius="md">
            <Text fontWeight="bold">{company}</Text>
          </Center>
        ))}
      </Flex>
    </Box>
  );
};

export default SectionFour;
