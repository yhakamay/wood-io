"use client";

import { Link } from "@chakra-ui/next-js";
import { Card, CardBody, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { db } from "@/lib/firebase";
import { WoodRequest, woodRequestConverter } from "@/types/wood_request";

import Loading from "./loading";

export default function Home() {
  const ref = collection(db, "wood-requests");
  const [woodRequests, loading, error] = useCollectionData<WoodRequest>(
    ref.withConverter(woodRequestConverter)
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Text>{JSON.stringify(error)}</Text>;
  }

  if (!woodRequests) {
    return <Text>No wood requests</Text>;
  }

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
            </CardBody>
          </Card>
        </Link>
      ))}
    </SimpleGrid>
  );
}
