import { Avatar, Box, Flex, Image, Tag, Text } from "@chakra-ui/react";
import React from "react";

const theatresList = [
  {
    name: "Atomic World",
    lecturer: "Kenneth Man",
    img: "https://i.pinimg.com/originals/6b/13/71/6b1371174243263b2bd636a1cbb2fa9c.jpg",
  },
  {
    name: "Secrets of DNA",
    lecturer: "Kong Au",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8t8soQfpULMK5ViPL58EnaKetvzPSCN5osQyrgyI0E-68EdZzgFsJ_wZqCACG8zSv6_Y&usqp=CAU",
  },
  {
    name: "Calculus",
    lecturer: "Alex Man",
    img: "https://images.theconversation.com/files/207820/original/file-20180226-140213-yox11e.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
  },
  {
    name: "English Literature",
    lecturer: "Candy Man",
    img: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTcxNTA2MDE3NzM2MDc0NzIz/shakespeare-gettyimages-51246880.jpg",
  },
  {
    name: "Web 3.0",
    lecturer: "Steve Man",
    img: "https://images.prismic.io/swissborg-website/4b075721-43c2-4986-a0f0-6517b0afaa9d_Web3.0-2022.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50",
  },
];

const featured = [
  {
    name: "Blockchain",
    img: "https://miro.medium.com/max/870/1*1QzjvXVGuk6XTHESIB5nkQ.jpeg",
  },
  {
    name: "Genomic Medicine",
    img: "https://images.theconversation.com/files/85220/original/image-20150616-5832-1sauvrl.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
  },
  {
    name: "Genomic Medicine",
    img: "https://images.theconversation.com/files/85220/original/image-20150616-5832-1sauvrl.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
  },
];

const Theatres = () => {
  return (
    <Box>
      <Flex columnGap={2} px={2} overflow="hidden">
        {theatresList.map((theatre, i) => (
          <Box
            borderRadius="md"
            borderWidth="0.5px"
            h="100px"
            w="80px"
            overflow="hidden"
            key={i}
          >
            <Flex
              h="100%"
              bgImage={`url(${theatre.img})`}
              backgroundPosition="center"
              bgSize="cover"
              backgroundRepeat="no-repeat"
              position="relative"
            >
              <Box
                position="absolute"
                bottom={0}
                backdropFilter="blur(5px)"
                bg="rgba(33, 30, 32, 0.49)"
                w="full"
                p={1.5}
                borderBottomRadius="md"
              >
                <Text color="white" fontSize="6px" fontWeight="bold">
                  {theatre.name}
                </Text>
                <Text color="white" fontSize="4px" fontWeight="light">
                  {theatre.lecturer}
                </Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </Flex>

      <Box p={2} mt={2} columnGap={2} overflow="hidden">
        <Text fontSize="xs" fontWeight="bold" mb={2}>
          Featured Classes
        </Text>
        <Flex columnGap={2}>
          {featured.map((f) => (
            <Flex
              h="100%"
              bgImage={`url(${f.img})`}
              backgroundPosition="center"
              bgSize="cover"
              backgroundRepeat="no-repeat"
              position="relative"
              h="100px"
              w="160px"
              borderRadius="lg"
            >
              <Box
                position="absolute"
                bottom="0px"
                backdropFilter="blur(2px)"
                bg="rgba(33, 30, 32, 0.49)"
                w="full"
                p={2}
                borderBottomRadius="lg"
                overflow="hidden"
              >
                <Text fontWeight="bold" fontSize="10px" color="white">
                  {f.name}
                </Text>
              </Box>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Theatres;
