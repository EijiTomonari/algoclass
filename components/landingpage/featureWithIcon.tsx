import { Flex, Heading, Icon, Text } from "@chakra-ui/react";

const FeatureWithIcon = (props: {
  icon: any;
  heading: string;
  body: string;
}) => {
  return (
    <Flex
      flexDir="row"
      align={"center"}
      px={["3em", null, "1em", "4em"]}
      py={["1em", null, "0"]}
    >
      <Icon
        as={props.icon}
        color="greenyellow"
        w={"3em"}
        h={"3em"}
        mr={"1em"}
      ></Icon>
      <Flex flexDir={"column"}>
        <Heading color="greenyellow" size={"md"}>
          {props.heading}
        </Heading>
        <Text>{props.body}</Text>
      </Flex>
    </Flex>
  );
};

export default FeatureWithIcon;
