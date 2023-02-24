import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Flex,
  VStack,
  HStack,
  Icon,
  IconButton,
  Text,
} from "@chakra-ui/react";
import exp from "constants";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import p_logo from "../public/p_logo.png";

export const btnColor = [
  "linear(to-tr, teal.300, yellow.400)",
  "linear(to-t, blue.200, teal.500)",
  "linear(to-b, orange.100, purple.300)",
];

export default function MyDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const NavInfo = [
    { navText: "Home", link: "/" },
    { navText: "Docs", link: "/Docs" },
    { navText: "Contact", link: "/Contact" },
    { navText: "About", link: "/About" },
  ];

  const NavLinks = ({ text, link }) => {
    return (
      <Text _hover={{ color: "#0070f3" }}>
        <Link href={link}>{text}</Link>
      </Text>
    );
  };

  return (
    <>
      <Flex
        position="fixed"
        top="0"
        left="0"
        // backgroundColor="#FAFAFACC"
        backdropFilter='blur(5px)'
        color="white"
        boxShadow="sm"
        zIndex="sticky"
        maxW={"fit-content"}
        w={["full", "full", "100vw", "100vw"]}
        p="2"
        // mt={10}
        justifyContent={"center"}
      >
        <HStack
          gap={5}
          w={["100vw", "100vw", "100vw", "100vw"]}
          justify={[
            "space-around",
            "space-around",
            "space-around",
            "space-around",
          ]}
        >
          <Link href={"/"}>
            <Image
              src={p_logo}
              alt="Panaverse DAO Logo"
              width={100}
              height={100}
            />
          </Link>
          <HStack
            display={["none", "none", "flex", "flex"]}
            as="ul"
            listStyleType={"none"}
            gap={8}
            fontSize="md"
            fontWeight="bold"
            fontFamily={"sans-serif"}
            color={"gray.600"}
          >
            {NavInfo.map((item) => {
              return <NavLinks text={item.navText} link={item.link} />;
            })}
          </HStack>
          <HStack>
            <IconButton
              variant={"outline"}
              py="5"
              aria-label="burger-icon"
              onClick={onOpen}
              ref={btnRef}
              size={["sm", "sm", "md", "md"]}
              display={["flex", "flex", "none", "none"]}
            >
              <Icon as={HamburgerIcon} />
            </IconButton>
            <Button
              size={["md", "md", "lg", "lg"]}
              bgGradient={btnColor}
              color="white"
              _hover={{
                bgGradient:
                  "linear(red.100 0%, orange.100 25%, yellow.100 50%)",
                color: "gray.500",
              }}
            >
              Sign Up
            </Button>
          </HStack>
        </HStack>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign={"center"} pb="10">
            Menu
          </DrawerHeader>

          <DrawerBody>
            <VStack
              gap={2}
              fontSize="md"
              fontWeight="bold"
              fontFamily={"sans-serif"}
              color={"gray.600"}
            >
              {NavInfo.map((item) => {
                return <NavLinks text={item.navText} link={item.link} />;
              })}
            </VStack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
