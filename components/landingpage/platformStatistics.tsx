import { Flex, Heading, Text } from "@chakra-ui/react";

const PlatformStatistics = () => {
  return (
    <Flex
      flexDir={"column"}
      background="linear-gradient(49deg, rgba(40,40,40,1) 0%, rgba(24,24,24,1) 100%)"
      borderRadius={"10px"}
      py={"2em"}
      w={"85%"}
    >
      <Heading>A plataforma em números</Heading>
      <Flex flexDir={"row"} justifyContent="space-evenly" my={"3em"}>
        <Flex flexDir={"column"}>
          <Heading size={"lg"}>0</Heading>
          <Text>Exercícios disponíveis</Text>
        </Flex>
        <Flex flexDir={"column"}>
          <Heading size={"lg"}>0</Heading>
          <Text>Pessoas cadastradas</Text>
        </Flex>
        <Flex flexDir={"column"}>
          <Heading size={"lg"}>0</Heading>
          <Text>Exercícios resolvidos</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PlatformStatistics;
