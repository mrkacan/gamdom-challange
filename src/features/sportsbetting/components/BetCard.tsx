import styled from "styled-components";

export const BetCard = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem;
    background-color: ${(props) => props.theme.card.background};
    color: ${(props) => props.theme.card.text};
    border-radius: 5px;
  `,
  Category: styled.h3`
    font-size: 0.9rem;
    font-weight: 500;
    color: ${(props) => props.theme.card.text.category};
    margin-bottom: 1.5rem;
  `,
  TeamWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0.5rem;
  `,
  SelectTeamWrapper: styled.div`
    display: flex;
    width: 100%;
    gap: 30px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  `,
  SelectTeamItem: styled.div<{ isSelected: boolean }>`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: ${(props) =>
      props.isSelected
        ? props.theme.card.controls.backgroundSelected
        : props.theme.card.controls.background};
    border-radius: 5px;
    height: 40px;
    padding: 0 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${(props) =>
        props.isSelected
          ? props.theme.card.controls.backgroundSelected
          : props.theme.card.controls.backgroundHover};
    }
  `,
  SelectTeamItemText: styled.div<{ isSelected: boolean }>`
    font-size: 1rem;
    font-weight: 600;
    margin-left: 10px;
    color: ${(props) =>
      props.isSelected
        ? props.theme.card.controls.displayItemTextSelected
        : props.theme.card.controls.displayItemText};
  `,
  SelectTeamHeaderText: styled.div`
    font-size: 1.1rem;
    font-weight: 600;
    color: ${(props) => props.theme.modal.title};
    margin-bottom: 2rem;
  `,
  TeamIcon: styled.div`
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.card.icon.team};
    border-radius: 20%;
    margin-right: 0.5rem;
  `,
  TeamName: styled.h4`
    font-size: 0.9rem;
    font-weight: 500;
    color: ${(props) => props.theme.card.text.team};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,
  BetsCount: styled.span`
    font-size: 0.7rem;
    font-weight: 400;
    margin-left: 5px;
    color: ${(props) => props.theme.card.text.bets};
  `,
  BetStakeInputWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    gap: 10px;
    margin-top: 1.5rem;
  `,

  BetStakeInput: styled.input`
    width: 60px;
    height: 40px;
    border: none;
    border-radius: 5px;
    padding: 0 1rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: ${(props) => props.theme.card.input.text};
    background-color: ${(props) => props.theme.card.input.background};
    outline: none;
  `,
  BetPotentialWinText: styled.div`
    width: 100%;
    text-align: right;
    margin-top: 1rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: ${(props) => props.theme.card.text.bets};
  `,
  BetPotentialWinValue: styled.span`
    font-size: 0.9rem;
    font-weight: 500;
    color: ${(props) => props.theme.card.text.potentialWin};
  `,
  BoldText: styled.span`
    font-weight: 700;
  `,
};
