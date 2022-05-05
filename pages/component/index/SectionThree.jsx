import { Box, Button, Flex, Image, Text, Wrap } from "@chakra-ui/react";

const SectionThree = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="flex-end"
      w="full"
      borderRadius="xl"
      py={20}
    >
      <Box maxW="500px">
        <Box>
          <Text
            fontWeight="extrabold"
            fontSize="5xl"
            lineHeight="1"
            mb={4}
          >
            Tailor-made.
          </Text>
          <Text fontWeight="extrabold" fontSize="5xl" lineHeight="1" mb={4}>
            Yes we do.
          </Text>
          <Text fontSize="xl" mb={4}>
            We plan for your business needs meticulously at
            every stage of development. We only deliver quality products.
          </Text>

          <Button variant="outline">Our projects</Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default SectionThree;
