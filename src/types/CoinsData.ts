import { Coin } from "./Coin";

export interface CoinsData {
  data: Coin[];
  info: {
    coins_num: number;
    time: number;
  }
}