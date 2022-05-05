import { Box, Button, Flex, Text, Wrap } from "@chakra-ui/react";
import Image from "next/image";
import Level from "../../../image/level.png";
import Tape from "../../../image/tape.png";

const SectionThree = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      flexDir={{ base: "column", md: "row-reverse" }}
      w="full"
      borderRadius="xl"
      py={20}
      px={10}
    >
      <Box maxW="500px">
        <Box>
          <Text fontWeight="extrabold" fontSize="5xl" lineHeight="1" mb={4}>
            Tailor-made.
          </Text>
          <Text fontWeight="extrabold" fontSize="5xl" lineHeight="1" mb={4}>
            Yes we do.
          </Text>
          <Text fontSize="xl" mb={4}>
            We plan for your business needs meticulously at every stage of
            development. We only deliver quality products.
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
            Our projects
          </Button>
        </Box>
      </Box>
      <Box mx={12} position="relative">
        <Image src={Level} width={350} height={300} objectFit="cover" />
      </Box>
    </Flex>
  );
};

export default SectionThree;
