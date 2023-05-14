"use client";

import {
  SimpleGrid,
  VStack,
  HStack,
  NumberInput,
  NumberInputField,
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  Button,
  Text,
  useDisclosure,
  Heading,
  Alert,
  AlertDescription,
  AlertIcon,
  Spacer,
} from "@chakra-ui/react";
import { collection, doc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { MdEmail, MdPerson, MdPhone } from "react-icons/md";

import { ProposalConfirmationModal } from "@/components/proposal_confirmation_modal";
import { db } from "@/lib/firebase";
import { Wood, woodConverter } from "@/types/wood";
import { WoodRequest, woodRequestConverter } from "@/types/wood_request";

import Loading from "./loading";

export default function Propose({ params }: { params: { requestId: string } }) {
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [email, setEmail] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");

  const requestId = params.requestId;
  const woodsRef = collection(db, "wood-requests", requestId, "woods");
  const [woods, loadingWoods, errorLoadingWoods] = useCollectionData<Wood>(
    woodsRef.withConverter(woodConverter)
  );
  const requestRef = doc(db, "wood-requests", requestId);
  const [request, loadingRequest, errorLoadingRequest] =
    useDocumentData<WoodRequest>(
      requestRef.withConverter(woodRequestConverter)
    );

  if (loadingWoods || loadingRequest) {
    return <Loading />;
  }

  return (
    <>
      <ProposalConfirmationModal
        router={router}
        isOpen={isOpen}
        onClose={onClose}
        woods={woods!}
        email={email}
        displayName={displayName}
        telephone={telephone}
      />
      <SimpleGrid minChildWidth="240px" spacing="40px">
        <VStack spacing={4} align={"start"}>
          <Heading size={"md"}>受注本数</Heading>
          {woods!.map((wood) => (
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
                //onChange={(value) => {
                //  setwoods((prev) => {
                //    const newWoods = prev.filter(
                //      (prevWood) => prevWood.name !== wood.name
                //    );
                //    if (+value > 0) {
                //      newWoods.push({
                //        name: wood.name,
                //        amount: parseInt(value),
                //      });
                //    }
                //    return newWoods;
                //  });
                //}}
              >
                <NumberInputField />
              </NumberInput>
            </HStack>
          ))}
          <Heading size={"md"}>ご連絡先</Heading>
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
            woods!.every((wood) => wood.amount === 0)
          }
        >
          確認
        </Button>
      </Flex>
      <Spacer h={4} />
      <Alert>
        <AlertIcon />
        <AlertDescription>まだ受注は確定しません</AlertDescription>
      </Alert>
    </>
  );
}
