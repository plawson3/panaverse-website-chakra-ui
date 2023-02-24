import {
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
  Image,
  Box,
  Button,
} from "@chakra-ui/react";
import p_logo from "../public/p_logo.png";
import React from "react";
import { btnColor } from "./NavBar";

import NextImage from "next/image";
import { motion } from "framer-motion";

const AnimatedBox = motion(Box);

export default function Hero() {
  return (
    <Flex direction={"column"} mt={"24"} >
      <Heading
        textAlign={["left", "left", "center", "center"]}
        my="6"
        fontSize={["3xl", "4xl", "5xl", "6xl"]}
        mx={["10", "10", "40", "40"]}
        gap={10}
        bgGradient={[
          "linear(to-tr, teal.300, yellow.400)",
          "linear(to-t, blue.200, teal.500)",
          "linear(to-b, orange.100, purple.300)",
        ]}
        bgClip="text"
      >
        Certified Web 3.0 and Metaverse Developer
      </Heading>

      <Flex mx={["10", "10", "35", "50", "60"]}>
        <Flex
          my={["5", "5", "10", "10"]}
          gap={[10, 10, 10, 20]}
          justify={[
            "space-around",
            "space-around",
            "space-around",
            "space-around",
          ]}
          direction={["column", "column", "row", "row"]}
        >
          <VStack gap="2">
            <VStack alignItems="flex-start">
              <Text fontSize={["lg", "lg", "2xl", "2xl"]}>
                A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
              </Text>
              <Button
                textAlign={"start"}
                fontFamily="sans-serif"
                fontWeight={"bold"}
                color="white"
                bgGradient={btnColor}
                _hover={{
                  bgGradient:
                    "linear(red.100 0%, orange.100 25%, yellow.100 50%)",
                  color: "gray.500",
                }}
              >
                Click here to Join
              </Button>
            </VStack>
            <VStack gap={1} alignItems="flex-start">
              <Image
                src="https://snappify.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatars2.04bb0378.png&w=384&q=75"
                alt="community image"
              />
              <Text
                color={"gray.600"}
                fontSize="sm"
                fontFamily={"revert-layer"}
              >
                Join a 13 Trillion Dollar Industry with 5 Billion Users
              </Text>
            </VStack>
          </VStack>
          <Box>
            <AnimatedBox
              animate={{
                scale: [0, 0.2, 0.4, 0.6, 0.8, 1],
                rotate: [270, 180, 90, 60, 30, 0],
              }}
              //   whileTap={{
              //     scale: [1, 0.8, 0.6, 0.4, 0.2, 0],
              //     rotate: [0, 30, 60, 90, 180, 270],
              //   }}
              whileTap={{
                scale: [1, 0.5],
                transition: { duration: 1 },
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
            >
              <NextImage src={p_logo} alt="Description of the image" />
            </AnimatedBox>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
