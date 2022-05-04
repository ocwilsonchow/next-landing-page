import { Flex } from "@chakra-ui/layout";
import Head from "next/head";
import SectionFour from "./component/index/SectionFour";
import SectionOne from "./component/index/SectionOne";
import SectionThree from "./component/index/SectionThree";
import SectionTwo from "./component/index/SectionTwo";

export default function Home() {
  return (
    <Flex flexDir="column" w="full" rowGap={10}>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </Flex>
  );
}
