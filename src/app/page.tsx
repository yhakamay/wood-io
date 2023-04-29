"use client";

import { Link } from "@chakra-ui/next-js";
import {
  Card,
  CardBody,
  Heading,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

import { woodRequests } from "../dummy-data";

export default function Home() {
  return (
    <SimpleGrid minChildWidth="320px" spacing="40px">
      {woodRequests.map((woodRequest) => (
        <Link
          key={woodRequest.id}
          href={`/${woodRequest.id}`}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Card h={"100%"}>
            <CardBody>
              <Heading size={"md"}>{woodRequest.title}</Heading>
              <Text fontSize={"xs"} mt={"4"}>
                {woodRequest.description}
              </Text>
              <UnorderedList mt={"8px"}>
                {woodRequest.woods.map((wood) => (
                  <ListItem key={wood.name}>
                    {wood.name} {wood.amount}本
                  </ListItem>
                ))}
              </UnorderedList>
            </CardBody>
          </Card>
        </Link>
      ))}
    </SimpleGrid>
  );
}
