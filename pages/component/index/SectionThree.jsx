import { Box, Button, Flex, Image, Text, Wrap } from "@chakra-ui/react";



const SectionThree = () => {
  return (
    <Flex alignItems="center" p={10} justifyContent="flex-end" w="full" borderWidth="1px"  >
      <Box maxW="400px" >
        <Box>
          <Text fontWeight="bold" fontSize="5xl" lineHeight="1" mb={4}>
           Tailor-made.
          </Text>
           <Text fontWeight="bold" fontSize="5xl" lineHeight="1" mb={4}>
          Yes we do.
          </Text>
          <Text fontSize="xl" mb={4}>We plan for your business needs meticulously.</Text>

        </Box>
      </Box>
    </Flex>
  );
};

export default SectionThree;
