import { Box, Button, Flex, Image, Text, Wrap } from "@chakra-ui/react";



const SectionThree = () => {
  return (
    <Flex alignItems="center" p={10} justifyContent="flex-end" w="full" borderWidth="1px" borderRadius="xl" >
      <Box maxW="400px" >
        <Box>
          <Text fontWeight="extrabold" fontSize="5xl" lineHeight="1" mb={4} bgGradient="linear(to-r, #456EB6, #E75258,#FAA12D)"  bgClip="text">
           Tailor-made.
          </Text>
           <Text fontWeight="extrabold" fontSize="5xl" lineHeight="1" mb={4}>
          Yes we do.
          </Text>
          <Text fontSize="xl" mb={4}>We plan for your business needs <strong>meticulously</strong> at every stage of development. We only deliver quality products.</Text>

        </Box>
      </Box>
    </Flex>
  );
};

export default SectionThree;
