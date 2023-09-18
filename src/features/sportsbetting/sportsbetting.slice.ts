import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toBet } from "./sportsbetting.api.ts";
import sportsExampleData from "./sample_mock_data.json";
import { Bet, Match } from "../../types/sportsbetting.type.ts";

export interface SportsBettingState {
  bets: Match[];
  slips: Bet[];
  slipsStatus: "idle" | "loading" | "failed";
  currentCategory: string;
}

const initialState: SportsBettingState = {
  slipsStatus: "idle",
  bets: sportsExampleData,
  slips: [],
  currentCategory: "all",
};

export const SportsBettingState = createSlice({
  name: "sportsBetting",
  initialState,
  reducers: {
    setCurrentCategory: (state, action: PayloadAction<string>) => {
      state.currentCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(toBetAsync.pending, (state) => {
        state.slipsStatus = "loading";
      })
      .addCase(toBetAsync.fulfilled, (state, action) => {
        state.slipsStatus = "idle";

        state.bets = state.bets.map((item) => {
          if (item.id === action.payload.betId) {
            const newItem = { ...item };

            if (action.payload.potentialWin === item.teams.away.name) {
              newItem.teams.away.bets += 1;
            } else {
              newItem.teams.home.bets += 1;
            }
            return newItem;
          }

          return item;
        });
        state.slips.push(action.payload);
      })
      .addCase(toBetAsync.rejected, (state) => {
        state.slipsStatus = "failed";
      });
  },
});

export const toBetAsync = createAsyncThunk(
  "sportsBetting/toBet",
  async (payload: Bet) => {
    const response = await toBet(payload);

    return response.data;
  },
);

export const { setCurrentCategory } = SportsBettingState.actions;

export default SportsBettingState.reducer;
