"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack,
  Divider,
  ModalFooter,
  Button,
  Text,
} from "@chakra-ui/react";

import { Wood } from "@/types/wood";

type ProposalConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  woods: Array<Wood>;
  email: string;
  displayName: string;
  telephone: string;
  router: any;
};

export function ProposalConfirmationModal(
  props: ProposalConfirmationModalProps
) {
  const { router, isOpen, onClose, woods, email, displayName, telephone } =
    props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>受注しますか？</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={2} align={"start"}>
            {woods?.map((wood) => (
              <Text key={wood.name}>
                {wood.name}: {wood.amount}本
              </Text>
            ))}
            <Divider variant={"dashed"} />
            <Text fontSize={"sm"}>
              メールアドレス: {email === "" ? "なし" : email}{" "}
            </Text>
            <Text fontSize={"sm"}>お名前: {displayName}</Text>
            <Text fontSize={"sm"}>電話番号: {telephone}</Text>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              onClose();
              router.push("/");
            }}
          >
            受注
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
