"use client";

import { Link } from "@chakra-ui/next-js";
import { Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <Heading mb={"2rem"}>
      <Link href={"/"}>Wood.io</Link>
    </Heading>
  );
}
