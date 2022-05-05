import { Box, Button, Flex, Text } from "@chakra-ui/react";
import WebApp from "../mock/WebApp";

const SectionOne = () => {
  return (
    <Flex
      flexDir={{sm: 'column', md: 'row'}}
      w="full"
      alignItems="center"
      justifyContent="space-between"

      rowGap={10}
      py="10vh"
    >
      <Box maxW="500px">
        <Box>
          <Box fontWeight="extrabold" fontSize="7xl" lineHeight="1" mb={4}>
            Nothing is Better Than
            <Text
              bgGradient="linear(to-r, blue.400, blue.600)"
              bgClip="text"
              display="inline-flex"
            >
              Well-Fitted.
            </Text>
          </Box>
          <Text mb={8} fontSize="xl" fontWeight="semibold" color="gray.500">
            Unique tech-based solutions to unleash your business potential
          </Text>
          <Button
            size="lg"
            bgGradient="linear(to-r, blue.400, blue.600)"
            fontWeight="bold"
            color="white"
            _hover={{ bgGradient: "linear(to-r, blue.300, blue.500)" }}
            _focus={{ outline: 0 }}
            _active={{ bgGradient: "linear(to-r, blue.600, blue.800)" }}
          >
            Bring Your Ideas to Live 💡
          </Button>
        </Box>
      </Box>
      <WebApp />
    </Flex>
  );
};

export default SectionOne;
