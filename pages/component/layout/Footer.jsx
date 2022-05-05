import {
  Box,
  Button,
  GridItem,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box borderTopWidth="0.5px" h="300px" mt={10} p={10}>
      <VStack pb={20}>
        <Text fontWeight="extrabold" fontSize="4xl" textAlign="center">
          Get in touch today
        </Text>
        <Text
          fontWeight="medium"
          color="gray.600"
          fontSize="xl"
          textAlign="center"
        >
          Level up your business with technologies.
        </Text>
        <InputGroup maxW="400px" py={6} _focus={{ outline: 0 }}>
          <Input
            borderRadius="full"
            placeholder="Email / Phone"
            _focus={{ outline: 0 }}
          />
        </InputGroup>
        <Button
          size="lg"
          bgGradient="linear(to-r, blue.400, blue.600)"
          fontWeight="bold"
          color="white"
          _hover={{ bgGradient: "linear(to-r, blue.300, blue.500)" }}
          _active={{ bgGradient: "linear(to-r, blue.600, blue.800)" }}
          _focus={{ outline: 0 }}
        >
          Get in touch
        </Button>
      </VStack>
    </Box>
  );
};

export default Footer;
