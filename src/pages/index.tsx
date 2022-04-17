import {
  Button,
  Flex,
  Heading,
  Text,
  Image,
  Icon,
  Link,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import LandingPageHeader from "../../components/landingpage/header";
import style from "../../styles/LandingPage.module.css";
import { HiOutlinePuzzle } from "react-icons/hi";
import { AiOutlineBuild } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import FeatureWithIcon from "../../components/landingpage/featureWithIcon";
import PlatformStatistics from "../../components/landingpage/platformStatistics";

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

      {/* First section */}
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

      {/* Second section */}
      <Flex
        flexDir={["column", "column", "row"]}
        mt={"5em"}
        align="center"
        justifyContent={"space-evenly"}
      >
        <FeatureWithIcon
          icon={HiOutlinePuzzle}
          heading={"Aprenda de forma interativa"}
          body={
            "Resolva desafios no editor de código online e receba feedbacks instantaneamente"
          }
        ></FeatureWithIcon>

        <FeatureWithIcon
          icon={AiOutlineBuild}
          heading={"Domine os fundamentos"}
          body={
            "Aprenda conceitos de Algoritmos e Estruturas de Dados, a base da programação"
          }
        ></FeatureWithIcon>

        <FeatureWithIcon
          icon={FaLaptopCode}
          heading={"Exercícios selecionados"}
          body={
            "Problemas que realmente exploram o que é cobrado em entrevistas de código"
          }
        ></FeatureWithIcon>
      </Flex>

      {/* Third section */}
      <Flex
        textAlign={"center"}
        align="center"
        alignContent={"center"}
        flexDir="column"
        mt={"3em"}
      >
        <PlatformStatistics></PlatformStatistics>
      </Flex>

      {/* Footer */}
      <Flex
        flexDir={"row"}
        align="center"
        justifyContent={"space-evenly"}
        py={"2em"}
      >
        <Text>
          Feito com ❤️&nbsp;&nbsp;e ☕ &nbsp;por
          <Link
            href="https://github.com/GabrielTomonariDev"
            isExternal
            ml={"5px"}
          >
            @eiji.tomonari
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Home;
