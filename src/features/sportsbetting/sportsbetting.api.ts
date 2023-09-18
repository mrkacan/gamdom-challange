import { Bet } from "../../types/sportsbetting.type.ts";

export function toBet(slip: Bet) {
  return new Promise<{ data: Bet }>((resolve, reject) => {
    if (slip.stake > Number.MAX_SAFE_INTEGER) {
      reject({ message: "Stake is too high" });
    } else {
      setTimeout(
        () => resolve({ data: { ...slip, date: new Date().getTime() } }),
        1000,
      );
    }
  });
}
