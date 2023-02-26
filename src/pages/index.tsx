"use client";

import { Container } from "../components/Container";
import Courses from "../components/Courses";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Jumbotron from "../components/Jumbotron";
import MyDrawer from "../components/NavBar";

const Index = () => {
  return (
    <Container height="100vh">
      <MyDrawer />
      <Hero />
      <Info />
      <Jumbotron />
      <Courses />

    </Container>
  );
};

export default Index;
