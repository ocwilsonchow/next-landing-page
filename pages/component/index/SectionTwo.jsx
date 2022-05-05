import {
  Box,
  Button,
  Flex,
  HStack,
  Circle,
  Text,
  Wrap,
} from "@chakra-ui/react";

const skills = [
  "Mobile Apps",
  "Web-based Platform",
  "E-commerce",
  "E-marketing",
  "UI/UX Design",
];

const SectionTwo = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      borderRadius="xl"
      py={10}

    >
      <Box maxW="500px">
        <Box>
          <Text fontWeight="extrabold" fontSize="5xl" lineHeight="1" mb={4}>
            What We Do
          </Text>
          <Text fontSize="xl" mb={4}>
            Our engineers, designers and consultants work closely together to
            craft your dream business solution.
          </Text>
          <Wrap>
            {skills.map((skill, i) => (
              <Button key={i} variant="outline" _focus={{ outline: 0 }}>
                {skill}
              </Button>
            ))}
          </Wrap>
        </Box>
      </Box>
      <Box width="400px" height="300px" position="relative">
        <Box
          borderRadius="lg"
          boxShadow="lg"
          width="300px"
          height="200px"
          position="absolute"
          left="0px"
        >
          <HStack h="20px" bg="gray.50" alignItems="center" px={2}>
            <Circle bg="red.400" boxSize="8px" />
            <Circle bg="orange.400" boxSize="8px" />
            <Circle bg="green.400" boxSize="8px" />
          </HStack>

          <Flex p={3}>
            <Flex
              p={2}
              borderRadius="md"
              h={150}
              w="full"
              bgGradient="linear(to-br, blue.400, blue.600)"
              flexDir="column"
              rowGap={2}
              alignItems="center"
              boxShadow="lg"
            >
              <HStack mb={2}>
                <Circle bg="white" boxSize={3} boxShadow="lg" />
                <Circle bg="white" boxSize={3} boxShadow="lg" />{" "}
                <Circle bg="white" boxSize={3} boxShadow="lg" />
              </HStack>
              <Box bg="white" w="40%" h={5} borderRadius="md" boxShadow="lg" />
              <Box bg="white" w="40%" h={5} borderRadius="md" boxShadow="lg" />
             <Box bg="white" w="40%" h={10} borderRadius="md" boxShadow="lg" />
            </Flex>
          </Flex>
        </Box>
        <Box
          borderRadius="2xl"
          bg="gray.50"
          boxShadow="lg"
          width="120px"
          height="250px"
          position="absolute"
          right="0px"
          top="25%"
          p={2}
        >
          <Flex
            flexDir="column"
            borderRadius="xl"
            bgGradient="linear(to-br, blue.400, blue.600)"
            w="full"
            h="full"
            p={2}
            rowGap={3}
          >
            <Circle bg="white" boxSize={5} boxShadow="lg" />
            <Box bg="white" w="full" h={5} borderRadius="md" boxShadow="lg" />
            <Box bg="white" w="70%" h={5} borderRadius="md" boxShadow="lg" />
            <Box bg="white" w="full%" h={20} borderRadius="md" boxShadow="lg" />
            <Flex justifyContent="space-evenly">
              <Circle bg="white" boxSize={5} boxShadow="lg" />
              <Circle bg="white" boxSize={5} boxShadow="lg" />
              <Circle bg="white" boxSize={5} boxShadow="lg" />
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default SectionTwo;
