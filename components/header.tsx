import {
  Button,
  Flex,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

const LandingPageHeader = () => {
  return (
    <Flex
      flexDir={"row"}
      w={"100%"}
      px={"5%"}
      py={"1%"}
      justifyContent="space-between"
      align={"center"}
    >
      <Link href="/">
        <Image src="/logo.svg" w={"10em"}></Image>
      </Link>
      <Flex flexDir={"row"} align="center">
        <Menu>
          <MenuButton as={Link}>Linguagens</MenuButton>
          <MenuList>
            <MenuItem isDisabled>Python (em breve)</MenuItem>
            <MenuItem isDisabled>JavaScript (em breve)</MenuItem>
          </MenuList>
        </Menu>
        <Link>
          <Text px="1em">Lógica de Programação</Text>
        </Link>
        <Button colorScheme={"green"}>Log In</Button>
      </Flex>
    </Flex>
  );
};
export default LandingPageHeader;
