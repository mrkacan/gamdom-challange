import sportsBettingReducer, {
  setCurrentCategory,
  SportsBettingState,
} from "./sportsbetting.slice.ts";
import sportsExampleData from "./sample_mock_data.json";

describe("SportsBetting reducer", () => {
  const initialState: SportsBettingState = {
    slipsStatus: "idle",
    bets: sportsExampleData,
    slips: [],
    currentCategory: "all",
  };

  it("should handle initial state", () => {
    expect(sportsBettingReducer(undefined, { type: "unknown" })).toEqual({
      slipsStatus: "idle",
      bets: sportsExampleData,
      slips: [],
      currentCategory: "all",
    });
  });

  it("should handle setCurrentCategory", () => {
    const actual = sportsBettingReducer(
      initialState,
      setCurrentCategory("Basketball"),
    );
    expect(actual.currentCategory).toEqual("Basketball");
  });
});
