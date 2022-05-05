import {
  Box,
  Button,
  Center,
  Flex,
  GridItem,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";

const SectionFive = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      borderRadius="2xl"
      pt={20}
      px={10}
    >
      <VStack pb={20}>
        <Text fontWeight="extrabold" fontSize="5xl" textAlign="center">
          Get in touch today
        </Text>
        <Text fontWeight="medium" fontSize="xl" textAlign="center">
          Level up your business with technologies.
        </Text>
        <InputGroup maxW="400px" py={6} _focus={{ outline: 0 }}>
          <Input placeholder="Email / Phone" _focus={{ outline: 0 }} />
        </InputGroup>
        <Button
          size="lg"
          bgGradient="linear(to-r, blue.400, blue.600)"
          fontWeight="bold"
          color="white"
          _hover={{ bgGradient: "linear(to-r, blue.300, blue.500)" }}
          _focus={{ outline: 0 }}
          _active={{ bgGradient: "linear(to-r, blue.600, blue.800)" }}
        >
          Get in touch
        </Button>
      </VStack>
    </Flex>
  );
};

export default SectionFive;
