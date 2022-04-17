import type { ReactElement } from "react";
import CourseLayout from "../../../components/course/courseLayout";
import { Text } from "@chakra-ui/react";

export default function Course() {
  return <Text>Teste</Text>;
}

Course.getLayout = function getLayout(page: ReactElement) {
  return <CourseLayout>{page}</CourseLayout>;
};
