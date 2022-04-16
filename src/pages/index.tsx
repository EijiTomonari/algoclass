import { Button, Flex, Heading, Text, Image } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import LandingPageHeader from "../../components/landingpage/header";
import style from "../../styles/LandingPage.module.css";

const Home: NextPage = () => {
  return (
    <Flex flexDir={"column"}>
      <Head>
        <title>Algoclass</title>
        <meta
          name="description"
          content="Aprenda a programar de forma interativa"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPageHeader></LandingPageHeader>

      <Flex align={"center"} mt={"10em"} flexDir={"column"} textAlign="center">
        <Heading>
          Aprenda a programar{" "}
          <span className={style.highlight}>gratuitamente</span>
        </Heading>
        <Text>
          A Algoclass é um projeto voluntário e <i>open source</i> voltado para
          o ensino aberto de programação
        </Text>
        <Button colorScheme={"green"} mt={"10"}>
          Começar!
        </Button>
        <Image mt={"10"} src="rocket.png"></Image>
      </Flex>
    </Flex>
  );
};

export default Home;
