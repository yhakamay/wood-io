"use client";

import { SimpleGrid, Card, CardBody, SkeletonText } from "@chakra-ui/react";

export default function Loading() {
  return (
    <SimpleGrid minChildWidth="320px" spacing="40px">
      {[...Array(10)].map((_, i) => (
        <Card h={"100%"} key={i}>
          <CardBody>
            <SkeletonText noOfLines={1} skeletonHeight={4} />
            <SkeletonText noOfLines={4} skeletonHeight={2} spacing={4} />
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
}
