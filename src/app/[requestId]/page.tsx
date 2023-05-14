"use client";

import { Button, Text, VStack } from "@chakra-ui/react";
import { doc, collection } from "firebase/firestore";
import { notFound, useRouter } from "next/navigation";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { MdChevronRight } from "react-icons/md";

import RequestSummaryCard from "@/components/request_summary_card";
import { db } from "@/lib/firebase";
import { Wood, woodConverter } from "@/types/wood";
import { WoodRequest, woodRequestConverter } from "@/types/wood_request";

import Loading from "./loading";

export default function RequestDetails({
  params,
}: {
  params: { requestId: string };
}) {
  const { requestId } = params;

  const router = useRouter();

  const requestRef = doc(db, "wood-requests", requestId);
  const [woodRequest, loadingWoodRequest, errorLoadingWoodRequest] =
    useDocumentData<WoodRequest>(
      requestRef.withConverter(woodRequestConverter)
    );
  const woodsRef = collection(db, "wood-requests", requestId, "woods");
  const [woods, loadingWoods, errorLoadingWoods] = useCollectionData<Wood>(
    woodsRef.withConverter(woodConverter)
  );

  if (loadingWoodRequest || loadingWoods) {
    return <Loading />;
  }

  if (!woodRequest) {
    notFound();
  }

  if (!woods) {
    return <Text>No woods</Text>;
  }

  return (
    <>
      <VStack align={"start"} spacing={4}>
        <RequestSummaryCard
          title={woodRequest.title}
          description={woodRequest.description}
          woods={woods}
        />
        <Button
          w={"100%"}
          maxW={"sm"}
          alignSelf={"center"}
          rightIcon={<MdChevronRight />}
          onClick={() => {
            router.push(`/${requestId}/propose`);
          }}
        >
          次へ
        </Button>
      </VStack>
    </>
  );
}
