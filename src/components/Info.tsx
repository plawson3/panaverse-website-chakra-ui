import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import NextImage from "next/image";
import dayInMetaVerse from "../public/dayInMetaVerse.jpg";
import { motion } from "framer-motion";

export default function Info() {
  const AnimatedBox = motion(Flex);

  return (
    <Flex mx={["10", "10", "40", "40"]} my="8">
      <Flex gap={10} alignItems="center" direction={["column","column","row","row"]} >
        <Flex h={400} w={"100"}>
          <AnimatedBox
            // animate={{
            //   scale: [0, 0.2, 0.4, 0.6, 0.8, 1],
            //   rotate: [270, 180, 90, 60, 30, 0],
            // }}
            whileTap={{
              scale: [1, 0.5],
              transition: { duration: 1 },
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
        <Flex direction={"column"} gap="10" justifyContent={"flex-start"}>
          <Heading fontFamily={"sans-serif"} fontSize="4xl">
            Web3 and metaverse technologies
          </Heading>
          <Text fontFamily={"sans-serif"} fontSize="xl">
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
