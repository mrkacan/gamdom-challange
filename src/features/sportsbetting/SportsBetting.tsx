import React from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setCurrentCategory, toBetAsync } from "./sportsbetting.slice.ts";
import Filter from "../../components/shared/Filter.tsx";
import BetControls from "./BetControls.tsx";
import { BetCard } from "./components/BetCard.tsx";
import { BetSlip } from "./components/BetSlip.tsx";
import { Wrappers } from "./components/Wrappers.tsx";
import {
  selectBets,
  selectCurrentCategory,
  selectSlipsStatus,
  selectSlips,
  selectSportsBetsCategories,
} from "./sportsbetting.selectors.ts";
import { Bet } from "../../types/sportsbetting.type.ts";
import { calculatePotentialWin } from "../../utils/helpers.ts";

const SportsBetting: React.FC = () => {
  const bets = useAppSelector(selectBets);
  const categories = useAppSelector(selectSportsBetsCategories);
  const slips = useAppSelector(selectSlips);
  const currentCategory = useAppSelector(selectCurrentCategory);
  const { isSlipsLoading, isSlipsError } = useAppSelector(selectSlipsStatus);
  const dispatch = useAppDispatch();

  const onBet = (bet: Bet) => {
    dispatch(toBetAsync(bet));
  };

  return (
    <Wrappers.MainWrapper>
      <Filter
        categories={categories}
        current={currentCategory}
        onCategoryChange={(val) => dispatch(setCurrentCategory(val))}
      />
      <Wrappers.ContentWrapper>
        <Wrappers.BetCardsWrapper>
          {bets.map((item) => {
            return (
              <BetCard.Wrapper key={item.id}>
                <BetCard.Category>{item.sport}</BetCard.Category>
                <BetCard.TeamWrapper>
                  <BetCard.TeamIcon />
                  <BetCard.TeamName>
                    {item?.teams?.home?.name}
                    <BetCard.BetsCount>
                      ({item?.teams?.home?.bets})
                    </BetCard.BetsCount>
                  </BetCard.TeamName>
                </BetCard.TeamWrapper>
                <BetCard.TeamWrapper>
                  <BetCard.TeamIcon />
                  <BetCard.TeamName>
                    {item?.teams?.away?.name}
                    <BetCard.BetsCount>
                      ({item?.teams?.away?.bets})
                    </BetCard.BetsCount>
                  </BetCard.TeamName>
                </BetCard.TeamWrapper>
                <BetControls item={item} onBet={onBet} />
              </BetCard.Wrapper>
            );
          })}
        </Wrappers.BetCardsWrapper>

        <Wrappers.BetSlipWrapper>
          <BetSlip.HeaderText>Slips</BetSlip.HeaderText>
          {isSlipsLoading ? <BetSlip.Loader /> : null}
          {isSlipsError ? <BetSlip.Error>Error</BetSlip.Error> : null}
          {slips.length === 0 ? <BetSlip.NoData>No data</BetSlip.NoData> : null}
          {slips.map((item) => {
            return (
              <BetSlip.Wrapper key={`slips-${item.betId}-${item.date}`}>
                <BetSlip.TeamName>
                  {`${item?.teams?.home?.name} / ${item?.teams?.away?.name}`}
                  <BetCard.BetPotentialWinText>
                    {`Potential win (${item.potentialWin}): `}
                    <BetCard.BetPotentialWinValue>{`$${calculatePotentialWin(
                      item.stake,
                      item.odd,
                    )}`}</BetCard.BetPotentialWinValue>
                  </BetCard.BetPotentialWinText>
                </BetSlip.TeamName>
              </BetSlip.Wrapper>
            );
          })}
        </Wrappers.BetSlipWrapper>
      </Wrappers.ContentWrapper>
    </Wrappers.MainWrapper>
  );
};

export default SportsBetting;
