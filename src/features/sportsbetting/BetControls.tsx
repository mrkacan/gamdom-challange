import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { Bet, Match, Team } from "../../types/sportsbetting.type.ts";
import Modal from "../../components/shared/Modal.tsx";
import { BetCard } from "./components/BetCard.tsx";
import { calculatePotentialWin } from "../../utils/helpers.ts";

const StyledBetControlWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin-top: 1.5rem;
`;

const StyledBetDisplayItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  background-color: ${(props) => props.theme.card.controls.background};
  border-radius: 5px;
  height: 40px;
  padding: 0 1rem;
`;

const StyledBetDisplayItemChoiceText = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${(props) => props.theme.card.controls.displayItemText};
`;

const StyledBetDisplayItemOddsText = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${(props) => props.theme.card.controls.displayItemText};
`;

const StyledPlaceABetButton = styled.button<{
  disabled?: boolean;
}>`
  width: 100px;
  height: 40px;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${(props) => props.theme.card.controls.buttonText};
  background-color: ${(props) =>
    props.disabled ? props.theme.button.disabled : props.theme.primary};
  border-radius: 5px;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) =>
      props.disabled ? props.theme.button.disabled : props.theme.primaryLight};
  }
`;

type Props = {
  item: Match;
  onBet: (bet: Bet) => void;
};

const BetControls: React.FC<Props> = ({ onBet, item }) => {
  const [open, setOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<Team>();
  const [stake, setStake] = useState<number | undefined>();
  const homeTeam = item?.teams?.home;
  const awayTeam = item?.teams?.away;

  const currentStake = Number(stake);

  const disabled = !selectedTeam || !(currentStake >= 1);

  const onBetClick = () => {
    if (selectedTeam && currentStake > 0) {
      onBet({
        betId: item.id,
        odd: selectedTeam.odds,
        stake: currentStake,
        potentialWin: selectedTeam.name,
      });
      setSelectedTeam(undefined);
      setStake(0);
      setOpen(false);
    }
  };

  const potentialWin = useMemo(() => {
    if (selectedTeam && currentStake > 0) {
      return calculatePotentialWin(currentStake, selectedTeam.odds);
    }
    return 0;
  }, [selectedTeam, currentStake]);

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <BetCard.Wrapper>
          <BetCard.SelectTeamHeaderText>
            Select a team/player
          </BetCard.SelectTeamHeaderText>
          <BetCard.SelectTeamWrapper>
            <BetCard.SelectTeamItem
              isSelected={homeTeam.name === selectedTeam?.name}
              onClick={() => setSelectedTeam(homeTeam)}
            >
              <BetCard.TeamIcon />
              <BetCard.SelectTeamItemText
                isSelected={homeTeam.name === selectedTeam?.name}
              >
                {item?.teams?.home?.name}
                <BetCard.BoldText>
                  {` (${item?.teams?.home?.odds.toFixed(2)})`}
                </BetCard.BoldText>
              </BetCard.SelectTeamItemText>
            </BetCard.SelectTeamItem>
            <BetCard.SelectTeamItem
              isSelected={awayTeam.name === selectedTeam?.name}
              onClick={() => setSelectedTeam(awayTeam)}
            >
              <BetCard.TeamIcon />
              <BetCard.SelectTeamItemText
                isSelected={awayTeam.name === selectedTeam?.name}
              >
                {item?.teams?.away?.name}

                <BetCard.BoldText>
                  {` (${item?.teams?.away?.odds.toFixed(2)})`}
                </BetCard.BoldText>
              </BetCard.SelectTeamItemText>
            </BetCard.SelectTeamItem>
          </BetCard.SelectTeamWrapper>
          <BetCard.BetPotentialWinText>
            {"Potential win: "}
            <BetCard.BetPotentialWinValue>{`$${potentialWin}`}</BetCard.BetPotentialWinValue>
          </BetCard.BetPotentialWinText>
          <BetCard.BetStakeInputWrapper>
            <BetCard.BetStakeInput
              placeholder="Stake"
              onChange={(e) => setStake(Number(e.target.value))}
            />
            <StyledPlaceABetButton onClick={onBetClick} disabled={disabled}>
              To Bet
            </StyledPlaceABetButton>
          </BetCard.BetStakeInputWrapper>
        </BetCard.Wrapper>
      </Modal>

      <StyledBetControlWrapper>
        <StyledBetDisplayItem>
          <StyledBetDisplayItemChoiceText>1</StyledBetDisplayItemChoiceText>
          <StyledBetDisplayItemOddsText>
            {item.teams.home.odds}
          </StyledBetDisplayItemOddsText>
        </StyledBetDisplayItem>
        <StyledPlaceABetButton onClick={() => setOpen(true)}>
          Place a bet
        </StyledPlaceABetButton>
        <StyledBetDisplayItem>
          <StyledBetDisplayItemChoiceText>2</StyledBetDisplayItemChoiceText>
          <StyledBetDisplayItemOddsText>
            {item.teams.away.odds}
          </StyledBetDisplayItemOddsText>
        </StyledBetDisplayItem>
      </StyledBetControlWrapper>
    </>
  );
};

export default BetControls;
