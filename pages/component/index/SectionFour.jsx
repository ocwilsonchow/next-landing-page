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

const companies = [

];

const SectionFour = () => {
  return (
    <Box alignItems="center" borderRadius="xl" py={20} w="full">
      <Text
        fontWeight="extrabold"
        fontSize="5xl"
        lineHeight="1"
        mb={4}
        textAlign="center"
        mb={10}
      >
        Trusted by enterprises
      </Text>

      <Flex flexWrap="wrap" justifyContent="center">
        {companies.map((company, i) => (
          <Image key={i} width="120px" src={company} />
        ))}
      </Flex>
    </Box>
  );
};

export default SectionFour;
