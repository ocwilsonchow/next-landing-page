import {
  Avatar,
  Box,
  Button,
  Circle,
  Flex,
  HStack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import calender from "../../../image/calendar.png";
import Theatres from "./Theatres";

const WebApp = () => {
  return (
    <Box
      borderWidth="0.5px"
      w="500px"
      h="350px"
      borderRadius="lg"
      boxShadow="xl"
      overflow="hidden"
    >
      <HStack h="20px" bg="gray.50" alignItems="center" px={2}>
        <Circle bg="red.400" boxSize="8px" />
        <Circle bg="orange.400" boxSize="8px" />
        <Circle bg="green.400" boxSize="8px" />
      </HStack>
      <Flex h="100%" >
        <Flex
          flexDir="column"
          rowGap={2}
          w="100px"
          borderRightWidth="0.5px"
          p={2}
        >
          <Text fontSize="8px" borderBottomWidth="0.5px" pb={2} mb={2}>
            MetaUni
          </Text>
          <Text fontSize="7px" color="gray.500" fontWeight="light">
            Dashboard
          </Text>
          <Text fontSize="7px" color="gray.500" fontWeight="light">
            Theatres
          </Text>
          <Text fontSize="7px" color="gray.500" fontWeight="light">
            Notes
          </Text>
          <Text fontSize="7px" color="gray.500" fontWeight="light">
            Examination
          </Text>
          <Text fontSize="7px" color="gray.500" fontWeight="light">
            Chat
          </Text>
          <Text fontSize="7px" color="gray.500" fontWeight="light">
            Settings
          </Text>
          <Text fontSize="7px" color="gray.500" fontWeight="light">
            Help
          </Text>

          <Box borderWidth="0.5px" p={1.5} borderRadius="md" mt={10}>
            <Image src={calender} width={20} height={20} objectFit="contain" />
            <Text fontSize="6px" color="gray.500" fontWeight="light">
              Upcoming events
            </Text>
            <Text fontSize="6px" color="blue.500" fontWeight="bold">
              Check out
            </Text>
          </Box>

          <Flex mt={2} flexDir="column" rowGap={2}>
            <HStack>
              <Avatar
                src="https://lh3.googleusercontent.com/a-/AOh14GiSD72dmA95dowN-ZZq8oVBgXBoStZpki7EsfO_qA=s96-c"
                size="xs"
              />
              <Box>
                <Text fontSize="7px" color="gray.800" fontWeight="light">
                  Wilson
                </Text>
                <Text fontSize="7px" color="gray.400" fontWeight="light">
                  Student
                </Text>
              </Box>
            </HStack>
          </Flex>
        </Flex>
        <Box w="full">
          <HStack p={2} borderBottomWidth="0.5px" w="full">
            <Text fontSize="xs" fontWeight="bold">
              Theatres
            </Text>
          </HStack>
          <Flex justifyContent="center" columnGap={2} p={2}>
            <Text
              px={1}
              py={0.5}
              borderRadius="md"
              borderWidth="0.5px"
              fontSize="8px"
            >
              🫁 Biology
            </Text>
            <Text
              px={1}
              py={0.5}
              borderRadius="md"
              borderWidth="0.5px"
              fontSize="8px"
            >
              🌍 Physics
            </Text>
            <Text
              px={1}
              py={0.5}
              borderRadius="md"
              borderWidth="0.5px"
              fontSize="8px"
            >
              🔥 Chemistry
            </Text>
            <Text
              px={1}
              py={0.5}
              borderRadius="md"
              borderWidth="0.5px"
              fontSize="8px"
            >
              📗 Chinese
            </Text>
            <Text
              px={1}
              py={0.5}
              borderRadius="md"
              borderWidth="0.5px"
              fontSize="8px"
            >
              📕 English
            </Text>
              <Text
              px={1}
              py={0.5}
              borderRadius="md"
              borderWidth="0.5px"
              fontSize="8px"
            >
              📉 Mathematics
            </Text>
          </Flex>
          <Theatres />
        </Box>
      </Flex>
    </Box>
  );
};

export default WebApp;
