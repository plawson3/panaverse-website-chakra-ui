import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

import p_logo_simple from "../public/p_logo_simple.png";

import NextImage from "next/image";
import { btnColor } from "./NavBar";
import { motion } from "framer-motion";

const AnimatedBox = motion(Flex);

export default function Jumbotron() {
  return (
    <Flex bgGradient={btnColor} my="10" backdropFilter="blur(15px)">
      <Flex
        borderRadius={10}
        mx={["10", "10", "10", "60"]}
        gap="8"
        direction="column"
        my={["10", "10", "20", "20"]}
      >
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
          <VStack
            shadow={"dark-lg"}
            gap={[1, 1, 5, 5]}
            justifyContent="center"
            textAlign={["start", "start", "center", "center"]}
            borderRadius={"3xl"}
            p={[10, 10, 20, 20]}
            bg={"white"}
          >
            <Box borderRadius="full" p={[5, 5, 10, 10]}
            >
              <NextImage src={p_logo_simple} alt="panaverse logo simple" />
            </Box>
            <Heading fontSize={["lg", "xl", "3xl", "3xl"]} fontFamily={"sans-serif"}>What is Panaverse DAO</Heading>
            <Text fontSize={["md", "lg", "2xl", "2xl"]}>
              The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
              Panaverse DAO is a movement to spread these technolgies globally.
              It is community of Web 3 and Metaverse developers, designers,
              trainers, startup founders and service providers.
            </Text>
          </VStack>
        </AnimatedBox>
      </Flex>
    </Flex>
  );
}
