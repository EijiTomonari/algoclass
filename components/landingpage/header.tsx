import { Button, Flex, Image, Link, Text } from "@chakra-ui/react";

const LandingPageHeader = () => {
  return (
    <Flex
      flexDir={"row"}
      w={"100%"}
      px={"13%"}
      py={"1%"}
      justifyContent="space-between"
      align={"center"}
    >
      <Link href="/">
        <Image src="logo.svg" w={"10em"}></Image>
      </Link>
      <Flex flexDir={"row"} align="center">
        <Link>
          <Text px="1em">Lógica de Programação</Text>
        </Link>
        <Button colorScheme={"green"}>Log In</Button>
      </Flex>
    </Flex>
  );
};
export default LandingPageHeader;
