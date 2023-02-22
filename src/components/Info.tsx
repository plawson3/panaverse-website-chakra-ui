import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import NextImage from "next/image";
import dayInMetaVerse from "../public/dayInMetaVerse.jpg";
import { motion } from "framer-motion";

export default function Info() {
  const AnimatedBox = motion(Flex);

  return (
    <Flex mx={["10", "10", "10", "40"]} my="8">
      <Flex gap={[5, 5, 10, 10]} alignItems="center" direction={["column", "column", "row", "row"]} >
        <Flex h={[200, 200, 400, 400]} w={["70", "80", "auto", "auto"]}>
          <AnimatedBox

            whileHover={{
              scale: [1, 1.1],
              transition: { duration: 0.5 },
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
          >
            <NextImage
              style={{ borderRadius: "25px" }}
              src={dayInMetaVerse}
              alt="metaverse image"
            />
          </AnimatedBox>
        </Flex>
        <Flex direction={["column"]} gap={["2", "2", "5", "5"]} justifyContent={"flex-start"}>
          <Heading fontFamily={"sans-serif"} fontSize={["2xl", "2xl", "4xl", "4xl"]}>
            Web3 and Metaverse technologies
          </Heading>
          <Text fontFamily={"sans-serif"} fontSize={["md", "md", "lg", "xl"]}>
            The internet is without a doubt the most important technological
            development in human history. Web3 and metaverse technologies expand
            the internet as we know it by introducing novel features and
            advancements. Metaverse will make use of all aspects of modern
            technology, including 3D, VR, AR, AI, blockchain, cloud computing,
            voice computing, ambient computing, and more.
          </Text>
        </Flex>
      </Flex>
    </Flex>

  );
}
