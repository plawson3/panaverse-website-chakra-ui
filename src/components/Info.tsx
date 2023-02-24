import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import NextImage from "next/image";
import { motion } from "framer-motion";

import { Data } from "../Content/CardInfo";

const MyCard = ({ _title, _text, _image }) => {
  const AnimatedBox = motion(Flex);
  return (
    <Flex
      gap={[5, 5, 10, 10]}
      alignItems="center"
      direction={["column", "column", "row", "row"]}
    >
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
            src={_image}
            alt="metaverse image"
          />
        </AnimatedBox>
      </Flex>
      <Flex
        direction={["column"]}
        gap={["2", "2", "5", "5"]}
        justifyContent={"flex-start"}
      >
        <Heading
          fontFamily={"sans-serif"}
          fontSize={["2xl", "2xl", "4xl", "4xl"]}
        >
          {_title}
        </Heading>
        <Text fontFamily={"sans-serif"} fontSize={["md", "md", "lg", "xl"]}>
          {_text}
        </Text>
      </Flex>
    </Flex>
  );
};

const MyCardReverse = ({ _title, _text, _image }) => {
  const AnimatedBox = motion(Flex);
  return (
    <Flex
      gap={[5, 5, 10, 10]}
      alignItems="center"
      flexDir={[
        "column-reverse",
        "column-reverse",
        // "row-reverse",
        // "row-reverse",
      ]}
      direction={["column", "column", "row", "row"]}
    >
      <Flex
        direction={["column"]}
        gap={["2", "2", "5", "5"]}
        justifyContent={"flex-start"}
      >
        <Heading
          fontFamily={"sans-serif"}
          fontSize={["2xl", "2xl", "4xl", "4xl"]}
        >
          {_title}
        </Heading>
        <Text fontFamily={"sans-serif"} fontSize={["md", "md", "lg", "xl"]}>
          {_text}
        </Text>
      </Flex>

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
            src={_image}
            alt="metaverse image"
          />
        </AnimatedBox>
      </Flex>
    </Flex>
  );
};

export default function Info() {
  return (
    <Flex mx={["10", "10", "10", "40"]} gap="10" direction="column" my="8">
      {Data.map((item, index) => {
        return index % 2 == 0 ? (
          <MyCard
            key={index}
            _title={item.title}
            _text={item.text}
            _image={item.image}
          />
        ) : (
          <MyCardReverse
            key={index}
            _title={item.title}
            _text={item.text}
            _image={item.image}
          />
        );
      })}
    </Flex>
  );
}
