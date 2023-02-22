"use client";

import { Container } from "../components/Container";
import Hero from "../components/Hero";
import Info from "../components/Info";
import MyDrawer from "../components/NavBar";

const Index = () => {
  return (
    <Container height="100vh">
      <MyDrawer />
      <Hero/>
      <Info/>
    </Container>
  );
};

export default Index;
