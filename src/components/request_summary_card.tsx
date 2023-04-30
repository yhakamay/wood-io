import { Heading, Text } from "@chakra-ui/react";

type RequestSummaryCardProps = {
  title: string;
  description: string;
};

export default function RequestSummaryCard(props: RequestSummaryCardProps) {
  const { title, description } = props;

  return (
    <>
      <Heading size={"xl"}>{title}</Heading>
      <Text>{description}</Text>
    </>
  );
}
