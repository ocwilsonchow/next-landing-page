import { Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import DrawerMenu from "./DrawerMenu";

const navItems = [
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Why Choose Us",
    link: "/why",
  },
  {
    title: "Our Clients",
    link: "/clients",
  },
];

const NavBar = () => {
  return (
    <Flex w="full" justifyContent="space-between" p={6} alignItems="center">
      <Link href="/">
        <Text
          bgGradient="linear(to-r, blue.400, blue.600)"
          bgClip="text"
          cursor="pointer"
          fontWeight="extrabold"
          fontSize="2xl"
          _hover={{ color: "teal" }}
        >
          OKIE
        </Text>
      </Link>
      <HStack spacing={6}>
        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          {navItems.map((item) => (
            <Link href={item.link}>
              <Button
                size="sm"
                variant="link"
                color="black"
                fontWeight="medium"
              >
                {item.title}
              </Button>
            </Link>
          ))}
          <Button
            fontWeight="bold"
            size="sm"
            colorScheme="twitter"
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
