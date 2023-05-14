import {
  FirestoreDataConverter,
  WithFieldValue,
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";

type AllowedWoods =
  | "杉"
  | "松"
  | "檜"
  | "サクラ"
  | "ヤマザクラ"
  | "イチョウ"
  | "クスノキ"
  | "ナラ"
  | "カバ"
  | "クルミ"
  | "カエデ"
  | "ウォールナット"
  | "オーク"
  | "マホガニー"
  | "ヒノキ"
  | "モミジ"
  | "ヤマボウシ"
  | "イロハモミジ"
  | "カラマツ"
  | "ヒバ"
  | "トドマツ"
  | "スギ"
  | "ヤシ"
  | "パイン"
  | "ツガ"
  | "メイプル"
  | "バンブー"
  | "カーボンファイバー"
  | "カヤ"
  | "バルサ"
  | "ラタン"
  | "パイプ"
  | "ローズウッド"
  | "エボニー"
  | "ブラックウッド"
  | "ホワイトオーク"
  | "レッドオーク"
  | "チェリー"
  | "ウォールナット（米国産）"
  | "ウォールナット（欧州産）"
  | "チーク"
  | "マホガニー（ホンジュラス産）"
  | "マホガニー（アフリカ産）"
  | "シマトネリコ"
  | "カシ"
  | "シダー"
  | "スプルース";

export type Wood = {
  name: AllowedWoods;
  amount: number;
};

export const woodConverter: FirestoreDataConverter<Wood> = {
  toFirestore(wood: WithFieldValue<Wood>): DocumentData {
    return {
      name: wood.name,
      amount: wood.amount,
    };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Wood {
    const data = snapshot.data(options);
    return {
      name: data.name,
      amount: data.amount,
    };
  },
};
