import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import sportsBettingReducer from "../features/sportsbetting/sportsbetting.slice.ts";

export const store = configureStore({
  reducer: {
    sportsBetting: sportsBettingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
