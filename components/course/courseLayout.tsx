import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Checkbox,
  Collapse,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  List,
  Link,
  ListItem,
  Text,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import Header from "../header";
import Head from "next/head";
import { MdChevronRight } from "react-icons/md";

type CourseLayoutProps = {
  children: React.ReactNode;
};

const CourseLayout = ({ children }: CourseLayoutProps) => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
  return (
    <Flex flexDir={"column"}>
      <Head>
        <title>Algoclass | Curso</title>
      </Head>
      <Header></Header>
      <Flex flexDir={"column"} w={"90%"} alignSelf="center">
        <Breadcrumb
          fontSize={"sm"}
          separator={<Text color={"greenyellow"}>{">"}</Text>}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/cursos">Cursos</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage color={"greenyellow"}>
            <BreadcrumbLink href="/cursos">Nome do Curso</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading size={`lg`}>Nome do curso</Heading>
        <Heading size={`md`} color="gray.500">
          Tópico selecionado
        </Heading>
        <Divider mt={"1em"}></Divider>
        <Flex flexDir={"row"} mt="1em">
          <Flex flexDir={"column"} w={isOpen ? "10em" : "3em"}>
            <Button onClick={onToggle}>
              {isOpen ? "Ocultar tópicos ⬅️" : "➡️"}
            </Button>
            <List display={isOpen ? "block" : "none"} spacing={1}>
              <ListItem my={"1em"}>
                <Heading size={"xs"}>Título do tópico</Heading>
              </ListItem>
              <ListItem>
                <Stack direction={"row"}>
                  <Checkbox defaultChecked></Checkbox>
                  <Link>Tópico 1</Link>
                </Stack>
              </ListItem>
              <ListItem>
                <Stack direction={"row"}>
                  <Checkbox defaultChecked></Checkbox>
                  <Link>Tópico 2</Link>
                </Stack>
              </ListItem>
              <ListItem>
                <Stack direction={"row"}>
                  <Checkbox defaultChecked></Checkbox>
                  <Link>Tópico 3</Link>
                </Stack>
              </ListItem>
              <ListItem>
                <Divider mt={"1em"}></Divider>
              </ListItem>
            </List>
          </Flex>
          <Flex flexDir={"column"} w={"90em"} ml={`1em`}>
            <Text>Test</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default CourseLayout;
