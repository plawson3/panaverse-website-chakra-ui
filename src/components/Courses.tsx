import { background, Box, Flex, Image, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import { useState } from "react";
import CoursesData from "../Content/CoursesInfo";

import { Data } from "../Content/CardInfo";

// import styles from "../styles/Course.module.css";



export function Course({ title }) {
  return (
    <Flex
      position="relative"
      maxW={{ base: "full", sm: "xs", md: "xs", lg: "lg" }}
      my={1}
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
        fontSize={["md", "lg", "lg", "xl"]}
        p="2"
        bg="blackAlpha.500"
        rounded={"2xl"}
        textAlign="start"
        isTruncated={false}
        maxW={"80"}
      >
        {title}
      </Text>
    </Flex>
  );
}


export default function Courses() {
  return (
    <Flex my={["0", "0", "4", "10"]}>
      <Flex
        mx={["4", "2", "2", "6"]}
        direction={["column", "column", "row", "row"]}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={[4, 4, 6, 6]}
      >
        {CoursesData.map((item, index) => {
          return <Course key={index} title={item.title} />
        })}
      </Flex>
    </Flex>
  );
}



// export function Course({ title }) {
//   const [isHovering, setIsHovering] = useState(false);

//   return (
//     <Flex
//       position="relative"
//       maxW={{ base: "full", sm: "xs", md: "xs", lg: "lg" }}
//       my={1}
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//       className={isHovering ? "shake" : ""}
//     >
//       <Box>
//         <NextImage
//           src={Data[0].image}
//           alt="image"
//           style={{ borderRadius: "20px" }}
//         />
//       </Box>
//       <Text
//         position="absolute"
//         left="2"
//         top={2}
//         color="white"
//         fontFamily={"sans-serif"}
//         fontWeight="bold"
//         fontSize={["md", "lg", "lg", "xl"]}
//         p="2"
//         bg="blackAlpha.500"
//         rounded={"2xl"}
//         textAlign="start"
//         isTruncated={false}
//         maxW={"80"}
//       >
//         {title}
//       </Text>
//     </Flex>
//   );
// }


// export default function Courses() {
//   return (
//     <Flex my={["0", "0", "4", "10"]}>
//       <Flex
//         mx={["4", "2", "2", "6"]}
//         direction={["column", "column", "row", "row"]}
//         justifyContent="center"
//         alignItems="center"
//         flexWrap="wrap"
//         gap={[4, 4, 6, 6]}
//       >
//         {CoursesData.map((item, index) => {
//           return <Course key={index} title={item.title} />;
//         })}
//       </Flex>
//     </Flex>
//   );
// }
