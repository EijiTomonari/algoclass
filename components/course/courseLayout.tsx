import { Flex } from "@chakra-ui/react";
import Header from "../header";

type CourseLayoutProps = {
  children: React.ReactNode;
};

const CourseLayout = ({ children }: CourseLayoutProps) => {
  return (
    <Flex flexDir={"column"}>
      <Header></Header>
      {children}
    </Flex>
  );
};
export default CourseLayout;
