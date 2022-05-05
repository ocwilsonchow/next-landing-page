import {
  Box,
  Button,
  Center,
  Code,
  Collapse,
  Fade,
  Flex,
  HStack,
  IconButton,
  SlideFade,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  AiOutlineGithub,
  AiFillFacebook,
  AiFillYoutube,
  AiTwotoneMail,
  AiFillInstagram,
} from "react-icons/ai";

const links = [
  {
    url: "https://github.com/ocwilsonchow/next-medium-clone-special",
    icon: <AiOutlineGithub />,
    name: "Github",
  },
  {
    url: "https://www.facebook.com/ocwilsonchow/",
    icon: <AiFillFacebook />,
    name: "Facebook",
  },
  {
    url: "https://www.instagram.com/ocwilsonchow/",
    icon: <AiFillInstagram />,
    name: "Instagram",
  },
  {
    url: "https://www.youtube.com/c/SLCHOW/featured",
    icon: <AiFillYoutube />,
    name: "YouTube",
  },
];

const Footer = () => {
  return (
    <VStack justifyContent="center" borderTopWidth="0.5px" h="200px" mt={10} p={10}>
      <Text fontSize="sm">Made by Wilson Chow</Text>
      <HStack spacing={3}>
        {links.map((link, i) => (
          <a href={link.url} key={i}>
            <IconButton
              fontSize="md"
              variant="ghost"
              icon={link.icon}
            />
          </a>
        ))}
      </HStack>
    </VStack>
  );
};

export default Footer;
