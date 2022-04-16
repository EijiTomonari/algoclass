import { Button, Flex, Heading, Text, Image, Icon } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import LandingPageHeader from "../../components/landingpage/header";
import style from "../../styles/LandingPage.module.css";
import { HiOutlinePuzzle } from "react-icons/hi";
import { AiOutlineBuild } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";

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
          o ensino livre de programação
        </Text>
        <Button colorScheme={"green"} mt={"10"}>
          Começar!
        </Button>
        <Image mt={"10"} src="rocket.png"></Image>
      </Flex>

      <Flex
        flexDir={"row"}
        px={"15em"}
        mt={"5em"}
        align="center"
        justifyContent={"space-evenly"}
      >
        <Flex flexDir="row" align={"center"} px={"2em"}>
          <Icon
            as={HiOutlinePuzzle}
            color="greenyellow"
            w={"3em"}
            h={"3em"}
            mr={"1em"}
          ></Icon>
          <Flex flexDir={"column"}>
            <Heading color="greenyellow" size={"md"}>
              Aprenda de forma interativa
            </Heading>
            <Text>
              Resolva desafios no editor de código online e receba feedbacks
              instantaneamente
            </Text>
          </Flex>
        </Flex>

        <Flex flexDir="row" align={"center"} px={"2em"}>
          <Icon
            as={AiOutlineBuild}
            color="greenyellow"
            w={"3em"}
            h={"3em"}
            mr={"1em"}
          ></Icon>
          <Flex flexDir={"column"}>
            <Heading color="greenyellow" size={"md"}>
              Domine os fundamentos
            </Heading>
            <Text>
              Aprenda conceitos de Algoritmos e Estruturas de Dados, a base da
              programação
            </Text>
          </Flex>
        </Flex>

        <Flex flexDir="row" align={"center"} px={"2em"}>
          <Icon
            as={FaLaptopCode}
            color="greenyellow"
            w={"3em"}
            h={"3em"}
            mr={"1em"}
          ></Icon>
          <Flex flexDir={"column"}>
            <Heading color="greenyellow" size={"md"}>
              Exercícios selecionados
            </Heading>
            <Text>
              Problemas que realmente exploram o que é cobrado em entrevistas de
              código
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
