import { Flex, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import UserCard from "../../components/dashboard/userCard";
import UserCourses from "../../components/dashboard/userCourses";
import Header from "../../components/header";

const Dashboard: NextPage = () => {
  return (
    <Flex flexDir={"column"} align="center">
      <Head>
        <title>Algoclass | Dashboard</title>
        <meta name="description" content="Cursos disponíveis no Algoclass" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <UserCard></UserCard>
      <UserCourses></UserCourses>
    </Flex>
  );
};

export default Dashboard;
