import { Wood } from "./wood";

export type WoodRequest = {
  id: string;
  title: string;
  description: string;
  woods: Array<Wood>;
};
