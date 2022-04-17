import { Flex, Heading, Grid, GridItem } from "@chakra-ui/react";
import UserCourseCard from "./userCourseCard";

const UserCourses = () => {
  return (
    <Flex flexDir={"column"} mt={"3em"} w="85%" textAlign="center">
      <Heading>Meus cursos</Heading>
      <Grid
        gridAutoColumns={"min-content"}
        gap={6}
        mt={"3em"}
        alignSelf="center"
      >
        <UserCourseCard></UserCourseCard>
      </Grid>
    </Flex>
  );
};

export default UserCourses;
