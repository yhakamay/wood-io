"use client";

import {
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  NumberInput,
  NumberInputField,
  SimpleGrid,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { notFound, useRouter } from "next/navigation";
import { useState } from "react";
import { MdEmail, MdPerson, MdPhone } from "react-icons/md";

import { ProposalConfirmationModal } from "@/components/proposal_confirmation_modal";
import RequestSummaryCard from "@/components/request_summary_card";
import { woodRequests } from "@/dummy-data";
import { Wood } from "@/types/wood";

export default function WoodRequest({
  params,
}: {
  params: { requestId: string };
}) {
  const { requestId } = params;
  const router = useRouter();
  const woodRequest = woodRequests.find(
    (woodRequest) => woodRequest.id === requestId
  );

  const [woods, setWoods] = useState<Array<Wood>>(
    woodRequest?.woods.map((wood) => ({ ...wood })) ?? []
  );
  const [email, setEmail] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!woodRequest) {
    notFound();
  }

  return (
    <>
      <ProposalConfirmationModal
        router={router}
        isOpen={isOpen}
        onClose={onClose}
        woods={woods}
        email={email}
        displayName={displayName}
        telephone={telephone}
      />
      <VStack align={"start"} spacing={4}>
        <RequestSummaryCard
          title={woodRequest.title}
          description={woodRequest.description}
        />
        <Card w={"100%"}>
          <CardBody>
            <SimpleGrid minChildWidth="240px" spacing="40px">
              <VStack spacing={4} align={"start"}>
                {woodRequest?.woods.map((wood) => (
                  <HStack key={wood.name}>
                    <Text fontSize={"xs"} noOfLines={1} w={"8rem"}>
                      {wood.name}
                    </Text>
                    <NumberInput
                      min={0}
                      defaultValue={wood.amount}
                      max={wood.amount}
                      w={"100%"}
                      key={wood.name}
                      onChange={(value) => {
                        setWoods((prev) => {
                          const newWoods = prev.filter(
                            (prevWood) => prevWood.name !== wood.name
                          );
                          if (+value > 0) {
                            newWoods.push({
                              name: wood.name,
                              amount: parseInt(value),
                            });
                          }
                          return newWoods;
                        });
                      }}
                    >
                      <NumberInputField />
                    </NumberInput>
                  </HStack>
                ))}
              </VStack>
              <VStack spacing={4} align={"start"}>
                <InputGroup>
                  <InputLeftElement>
                    <MdEmail />
                  </InputLeftElement>
                  <Input
                    placeholder="メールアドレス"
                    type={"email"}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement>
                    <MdPerson />
                  </InputLeftElement>
                  <Input
                    placeholder="お名前"
                    type={"text"}
                    onChange={(e) => setDisplayName(e.target.value)}
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement>
                    <MdPhone />
                  </InputLeftElement>
                  <Input
                    placeholder="電話番号"
                    type={"tel"}
                    onChange={(e) => setTelephone(e.target.value)}
                  />
                </InputGroup>
              </VStack>
            </SimpleGrid>
            <Flex justify={"end"} mt={"8"}>
              <Button
                alignSelf={"end"}
                onClick={onOpen}
                isDisabled={
                  email === "" ||
                  displayName === "" ||
                  woods.every((wood) => wood.amount === 0)
                }
              >
                次へ
              </Button>
            </Flex>
          </CardBody>
        </Card>
      </VStack>
    </>
  );
}
