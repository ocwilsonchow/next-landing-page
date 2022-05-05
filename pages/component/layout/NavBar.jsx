import { Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import DrawerMenu from "./DrawerMenu";

const navItems = [
  {
    title: "Projects",
    link: "/",
  },
  {
    title: "About Us",
    link: "/",
  },
  {
    title: "Services",
    link: "/",
  },
  {
    title: "Our Clients",
    link: "/",
  },
];

const NavBar = () => {
  return (
    <Flex
      w="full"
      justifyContent="space-between"
      py={4}
      px={8}
      alignItems="center"
    >
      <Link href="/">
        <Text
          // bgGradient="linear(to-r, #456EB6, #E75258,#FAA12D)"
          bgGradient="linear(to-r, blue.400, blue.600)"
          bgClip="text"
          cursor="pointer"
          fontWeight="extrabold"
          fontSize="3xl"
          _hover={{ color: "teal" }}
        >
          OKIE
        </Text>
      </Link>
      <HStack spacing={6}>
        <HStack spacing={2} display={{ base: "none", md: "flex" }}>
          {navItems.map((item, i) => (
            <Link key={i} href={item.link}>
              <Button
                size="sm"
                variant="ghost"
                borderRadius="full"
                color="black"
                fontWeight="bold"
                _focus={{ outline: 0 }}
                _hover={{bg: 'black', color: 'white'}}
                transition="all ease 0.3s"
              >
                {item.title}
              </Button>
            </Link>
          ))}
          <Button
            size="sm"
            bgGradient="linear(to-r, blue.400, blue.600)"
            fontWeight="bold"
            color="white"
            _hover={{ bgGradient: "linear(to-r, blue.300, blue.500)" }}
            _active={{ bgGradient: "linear(to-r, blue.600, blue.800)" }}
            _focus={{ outline: 0 }}
          >
            Contact Us
          </Button>
        </HStack>
        <DrawerMenu />
      </HStack>
    </Flex>
  );
};

export default NavBar;
