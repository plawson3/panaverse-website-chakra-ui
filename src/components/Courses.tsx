import { background, Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import NextImage from "next/image";

import { Data } from "../Content/CardInfo";

export function Course() {
  return (
    <Flex
      position="relative"
      maxW={{ base: "full", sm: "xs", md: "xs", lg: "lg" }}
      // mx={[2, 2, 4, 4]}
      my={[4, 4, 6, 1]}
    >
      <Box>
        <NextImage
          src={Data[0].image}
          alt="image"
          style={{ borderRadius: "20px" }}
        />
      </Box>
      <Text
        position="absolute"
        left="2"
        top={2}
        color="white"
        fontFamily={"sans-serif"}
        fontWeight="bold"
        fontSize={["md", "lg", "xl", "xl"]}
        p="2"
        bg="blackAlpha.500"
        rounded={"2xl"}
        textAlign="start"
        isTruncated={false}
        maxW={"80"}
      >
        Artificial Intelligence (AI) and Deep Learning Specialization
      </Text>
    </Flex>
  );
}

export default function Courses() {
  return (
    <Flex my={["0", "0", "10", "10"]}>
      <Flex
        mx={["2", "2", "2", "6"]}
        direction={["column", "column", "row", "row"]}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={[4, 4, 6, 6]}
      >
        <Course />
        <Course />
        <Course />
        <Course />
      </Flex>
    </Flex>
  );
}
