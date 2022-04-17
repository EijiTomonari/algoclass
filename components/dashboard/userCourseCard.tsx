import {
  GridItem,
  Heading,
  Progress,
  Text,
  Image,
  Flex,
  Link,
  Tag,
} from "@chakra-ui/react";

const UserCourseCard = () => {
  return (
    <Link isExternal href="https://www.google.com">
      <GridItem
        w={"15em"}
        minH={"15em"}
        background="#333333"
        borderRadius={"10px"}
      >
        <Image
          borderTopRadius={"10px"}
          align={"center"}
          width={"15em"}
          height={"5em"}
          objectFit="cover"
          src={
            "https://cdn.pixabay.com/photo/2020/12/12/21/55/rubiks-cube-5826755_960_720.jpg"
          }
        ></Image>
        <Flex flexDir="column" p={"1em"}>
          <Tag size={"sm"} colorScheme={"red"} mb={"1em"}>
            Exercícios novos toda semana
          </Tag>
          <Heading size="sm" fontWeight={"bold"} alignSelf="start">
            Lógica de Programação
          </Heading>
          <Text alignSelf={"start"} fontSize={"small"} textAlign={"left"}>
            Aprenda algoritmos, lógica de programação, operadores e muito mais
          </Text>
          <Progress
            mt={"1em"}
            size={"xs"}
            hasStripe
            value={64}
            colorScheme={"green"}
            backgroundColor={"gray"}
          />
          <Text fontSize={"small"} alignSelf="start">
            Progresso: 80% (80/100)
          </Text>
        </Flex>
      </GridItem>
    </Link>
  );
};

export default UserCourseCard;
