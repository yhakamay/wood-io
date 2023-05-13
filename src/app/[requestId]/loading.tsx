"use client";

import { Skeleton, Spacer, Stack } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Stack>
      <Skeleton h={"40px"} />
      <Spacer h={"20px"} />
      <Skeleton h={"20px"} />
      <Skeleton h={"20px"} />
      <Skeleton h={"20px"} />
    </Stack>
  );
}
