import { Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";

import { Wood } from "@/types/wood";

type RequestSummaryCardProps = {
  title: string;
  description: string;
  woods: Wood[];
};

export default function RequestSummaryCard(props: RequestSummaryCardProps) {
  const { title, description } = props;

  return (
    <>
      <Heading size={"xl"}>{title}</Heading>
      <Text>{description}</Text>
      <UnorderedList pl={6}>
        {props.woods.map((wood) => (
          <ListItem key={wood.name}>
            {wood.name} - {wood.amount} 本
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
}
