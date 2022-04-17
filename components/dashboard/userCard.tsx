import { Avatar, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react";

import { HiOutlinePuzzle } from "react-icons/hi";

const UserCard = () => {
  return (
    <Flex
      flexDir={"column"}
      background="#333333"
      borderRadius="15px"
      alignContent={"start"}
      p={"1em"}
      w={"75%"}
    >
      <Flex flexDir={["column", "row"]} align="center">
        <Flex flexDir={"column"}>
          <Avatar
            name="Eiji Tomonari"
            size={"2xl"}
            src="https://rollingstone.uol.com.br/media/uploads/poster-end-of-evangelion-divulgacao.jpg"
          />
        </Flex>
        <Flex flexDir={"column"} pl={"1em"}>
          <Heading>Eiji Tomonari</Heading>
          <Stack direction={"row"} align="center" spacing={"2px"}>
            <Icon as={HiOutlinePuzzle} color="greenyellow"></Icon>
            <Text fontWeight={"bold"}>Exercícios resolvidos:</Text>
            <Text>289</Text>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserCard;
