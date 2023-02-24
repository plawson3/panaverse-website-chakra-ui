import { background, Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import NextImage from "next/image";

import { Data } from "../Content/CardInfo";

export default function Courses() {
  return (
    <Flex my="10">
      <Flex mx={["10", "10", "10", "32"]} gap="10" direction="column" my="8">
        <Grid
          templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
          templateRows={["repeat(2, 1fr)", "repeat(2, 1fr)", "1fr 1fr"]}
          gap={6}
        >
          <GridItem position="relative">
            <NextImage
              src={Data[0].image}
              alt="image"
              style={{ borderRadius: "20px" }}
            />
            <Text
              position="absolute"
              left="2"
              top={2}
              color="white"
              fontFamily={"sans-serif"}
              fontWeight="bold"
              fontSize={"xl"}
              p="2"
              bg="blackAlpha.500"
              rounded={"2xl"}
              textAlign="start"
              isTruncated={false}
              maxW={"80"}
            >
              Artificial Intelligence (AI) and Deep Learning Specialization
            </Text>
          </GridItem>

          <GridItem position="relative">
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
              fontSize={"xl"}
              bg="blackAlpha.500"
              rounded={"2xl"}
              p="2"
              textAlign="start"
              isTruncated={false}
              maxW={"80"}
            >
              Web 3.0 (Blockchain) and Metaverse Specialization
            </Text>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
}
