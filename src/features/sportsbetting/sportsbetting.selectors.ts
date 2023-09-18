import { RootState } from "../../app/store";
import { createSelector } from "@reduxjs/toolkit";

const bets = (state: RootState) => state.sportsBetting.bets;
const slips = (state: RootState) => state.sportsBetting.slips;
const slipStatus = (state: RootState) => state.sportsBetting.slipsStatus;

export const selectCurrentCategory = (state: RootState) =>
  state.sportsBetting.currentCategory;

export const selectBets = createSelector(
  [bets, selectCurrentCategory],
  (bets, currentCategory) => {
    return bets.filter(
      (item) =>
        item.sport.toLowerCase() === currentCategory.toLowerCase() ||
        currentCategory.toLowerCase() === "all",
    );
  },
);

export const selectSlips = createSelector([bets, slips], (bets, slips) => {
  return slips.map((slip) => {
    const relatedBet = bets.find((bet) => slip.betId === bet.id);
    return {
      ...relatedBet,
      ...slip,
    };
  });
});

export const selectSlipsStatus = createSelector(
  [slipStatus],
  (slipsStatus) => ({
    isSlipsLoading: slipsStatus === "loading",
    isSlipsError: slipsStatus === "failed",
  }),
);

export const selectSportsBetsCategories = createSelector([bets], (bets) => [
  ...new Set(bets.map((item) => item.sport)),
]);
