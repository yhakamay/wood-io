import { WoodRequest } from "@/types/wood_request";

export const woodRequests = [
  {
    id: "1",
    title: "一戸建て建築用の木を求めています",
    description:
      "家を建てるためにこれくらい木が欲しいです。家を建てるためにこれくらい木が欲しいです。家を建てるためにこれくらい木が欲しいです。家を建てるためにこれくらい木が欲しいです。家を建てるためにこれくらい木が欲しいです。",
    woods: [
      {
        name: "杉",
        amount: 10,
      },
      {
        name: "松",
        amount: 5,
      },
      {
        name: "檜",
        amount: 3,
      },
    ],
  },
  {
    id: "2",
    title: "庭木用に木を探しています",
    description:
      "庭に植える木を探しています。高さは2メートルほどで、葉が緑色のものを希望しています。",
    woods: [
      {
        name: "シマトネリコ",
        amount: 4,
      },
      {
        name: "モミジ",
        amount: 2,
      },
    ],
  },
  {
    id: "3",
    title: "デッキ用の木材を求めています",
    description:
      "デッキを作るための木材を探しています。大きすぎず小さすぎず、丈夫で長持ちするものがいいです。",
    woods: [
      {
        name: "カシ",
        amount: 8,
      },
      {
        name: "ヒノキ",
        amount: 6,
      },
    ],
  },
  {
    id: "4",
    title: "薪用の木を探しています",
    description:
      "暖炉に使う薪を探しています。燃えやすくて長時間燃えるものがいいです。",
    woods: [
      {
        name: "ヤシ",
        amount: 10,
      },
      {
        name: "カエデ",
        amount: 5,
      },
    ],
  },
  {
    id: "5",
    title: "造園用の木を探しています",
    description:
      "公園や街路樹に使う木を探しています。見た目が美しく、丈夫で病気に強いものがいいです。",
    woods: [
      {
        name: "サクラ",
        amount: 20,
      },
      {
        name: "ヤマザクラ",
        amount: 15,
      },
      {
        name: "イチョウ",
        amount: 8,
      },
      {
        name: "クスノキ",
        amount: 10,
      },
    ],
  },
  {
    id: "6",
    title: "フローリング用の木材を探しています",
    description:
      "床材として使う木材を探しています。色合いが明るく、硬くて傷がつきにくいものがいいです。",
    woods: [
      {
        name: "ナラ",
        amount: 12,
      },
      {
        name: "カバ",
        amount: 7,
      },
    ],
  },
  {
    id: "7",
    title: "カッティングボード用の木材を探しています",
    description:
      "キッチンで使うカッティングボードを作るために木材を探しています。切りやすくて水に強いものがいいです。",
    woods: [
      {
        name: "クルミ",
        amount: 4,
      },
      {
        name: "カエデ",
        amount: 3,
      },
      {
        name: "チェリー",
        amount: 2,
      },
    ],
  },
  {
    id: "8",
    title: "木製のインテリア家具用の材料を探しています",
    description:
      "テーブルや椅子などの家具を作るための木材を探しています。丈夫で美しい木材がいいです。",
    woods: [
      {
        name: "ウォールナット",
        amount: 8,
      },
      {
        name: "オーク",
        amount: 6,
      },
      {
        name: "マホガニー",
        amount: 3,
      },
    ],
  },
  {
    id: "9",
    title: "家庭菜園用の木材を探しています",
    description:
      "家庭菜園の箱や棚などに使う木材を探しています。簡単に扱えるものがいいです。",
    woods: [
      {
        name: "松",
        amount: 10,
      },
      {
        name: "ヒノキ",
        amount: 5,
      },
    ],
  },
  {
    id: "10",
    title: "ガーデニング用の木を探しています",
    description:
      "庭に植える木を探しています。四季折々の色合いが楽しめるものがいいです。",
    woods: [
      {
        name: "カエデ",
        amount: 3,
      },
      {
        name: "サクラ",
        amount: 5,
      },
      {
        name: "モミジ",
        amount: 2,
      },
      {
        name: "ヤマボウシ",
        amount: 4,
      },
      {
        name: "イロハモミジ",
        amount: 3,
      },
    ],
  },
  {
    id: "11",
    title: "キャンプ用の薪を探しています",
    description:
      "キャンプで使う薪を探しています。燃えやすくて煙が出にくいものがいいです。",
    woods: [
      {
        name: "カラマツ",
        amount: 10,
      },
      {
        name: "ヒバ",
        amount: 5,
      },
      {
        name: "トドマツ",
        amount: 3,
      },
    ],
  },
  {
    id: "12",
    title: "ペレットストーブ用の木質ペレットを探しています",
    description:
      "ペレットストーブに使う木質ペレットを探しています。高熱効率で燃えやすく、煙が出にくいものがいいです。",
    woods: [
      {
        name: "スギ",
        amount: 20,
      },
      {
        name: "ヒノキ",
        amount: 15,
      },
      {
        name: "ヤシ",
        amount: 10,
      },
    ],
  },
  {
    id: "13",
    title: "DIYで使う木材を探しています",
    description: "DIYで使う木材を探しています。サイズは小さいものがいいです。",
    woods: [
      {
        name: "パイン",
        amount: 5,
      },
      {
        name: "ヒノキ",
        amount: 3,
      },
      {
        name: "ツガ",
        amount: 2,
      },
    ],
  },
  {
    id: "14",
    title: "スケートボードのデッキを作るための木材を探しています",
    description:
      "スケートボードのデッキを作るための木材を探しています。しなやかで強いものがいいです。",
    woods: [
      {
        name: "メイプル",
        amount: 2,
      },
      {
        name: "バンブー",
        amount: 3,
      },
    ],
  },
  {
    id: "15",
    title: "カヤック用のパドルを作るための木材を探しています",
    description:
      "カヤック用のパドルを作るための木材を探しています。軽くて丈夫なものがいいです。",
    woods: [
      {
        name: "カーボンファイバー",
        amount: 1,
      },
      {
        name: "カヤ",
        amount: 2,
      },
    ],
  },
  {
    id: "16",
    title: "ウッドクラフト用の木材を探しています",
    description:
      "ウッドクラフトで使う木材を探しています。種類は問いませんが、柔らかくて扱いやすいものがいいです。",
    woods: [
      {
        name: "パイン",
        amount: 5,
      },
      {
        name: "スプルース",
        amount: 3,
      },
      {
        name: "シダー",
        amount: 2,
      },
    ],
  },
  {
    id: "17",
    title: "鉢カバー用の木材を探しています",
    description:
      "観葉植物の鉢にかぶせる鉢カバーを作るための木材を探しています。軽くて丈夫なものがいいです。",
    woods: [
      {
        name: "バルサ",
        amount: 5,
      },
      {
        name: "ラタン",
        amount: 3,
      },
      {
        name: "パイプ",
        amount: 2,
      },
    ],
  },
  {
    id: "18",
    title: "木工用の道具を作るための木材を探しています",
    description:
      "木工用の道具を作るための木材を探しています。硬くて丈夫なものがいいです。",
    woods: [
      {
        name: "ローズウッド",
        amount: 3,
      },
      {
        name: "エボニー",
        amount: 2,
      },
      {
        name: "ブラックウッド",
        amount: 1,
      },
    ],
  },
  {
    id: "19",
    title: "アクセサリー用の木材を探しています",
    description:
      "アクセサリーを作るための木材を探しています。小さくて美しいものがいいです。",
    woods: [
      {
        name: "チェリー",
        amount: 2,
      },
      {
        name: "ウォールナット",
        amount: 1,
      },
      {
        name: "マホガニー",
        amount: 1,
      },
    ],
  },
  {
    id: "20",
    title: "家具の修理用の木材を探しています",
    description:
      "家具の修理用の木材を探しています。種類は問いませんが、色や質感が近いものがいいです。",
    woods: [
      {
        name: "オーク",
        amount: 5,
      },
      {
        name: "カバ",
        amount: 3,
      },
      {
        name: "ウォールナット",
        amount: 2,
      },
    ],
  },
] satisfies Array<WoodRequest>;
