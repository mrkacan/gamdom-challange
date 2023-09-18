import styled from "styled-components";

export const Wrappers = {
  MainWrapper: styled.main`
    display: flex;
    flex-direction: column;
  `,
  ContentWrapper: styled.div`
    display: flex;
    gap: 10px;
    background-color: ${(props) => props.theme.background};
    padding: 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 2rem 0 2rem 0;
    }
  `,
  BetCardsWrapper: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    grid-auto-rows: min-content;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `,
  BetSlipWrapper: styled.div`
    position: relative;
    width: calc(100% - 66%);
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: ${(props) => props.theme.card.background};
    border-radius: 5px;
    overflow: hidden;

    @media (max-width: 768px) {
      width: calc(100% - 20px);
      padding: 10px;
    }
  `,
};
