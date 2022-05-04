import { Box, Button, Flex, Image, Text, Wrap } from "@chakra-ui/react";

const skills = [
  "Mobile Apps",
  "Web-based Platform",
  "E-commerce",
  "E-marketing",
  "UI/UX Design",
];

const SectionFour = () => {
  return (
    <Flex alignItems="center" p={10} borderWidth="1px" borderRadius="xl">
      <Box maxW="400px">
        <Box>
          <Text fontWeight="extrabold" fontSize="5xl" lineHeight="1" mb={4}>
            Trusted by enterprises
          </Text>
          <Text fontSize="xl" mb={4}>
            We are serving over 30 clients
          </Text>
          <Wrap>
            {skills.map((skill, i) => (
              <Button size="lg" key={i} variant="outline" _focus={{outline: 0}}>
                {skill}
              </Button>
            ))}
          </Wrap>
        </Box>
      </Box>
    </Flex>
  );
};

export default SectionFour;
