import styled from "styled-components";

export const BetSlip = {
  Wrapper: styled.div`
    display: flex;
    padding: 10px;
    background-color: ${(props) => props.theme.card.innerCardBackground};
    color: ${(props) => props.theme.card.text};
    border-radius: 5px;
    margin-bottom: 10px;
  `,
  HeaderText: styled.div`
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) => props.theme.card.text.category};
    margin-bottom: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    padding-top: 10px;
  `,
  TeamName: styled.div`
    font-size: 0.9rem;
    font-weight: 500;
    color: ${(props) => props.theme.card.text.team};
    margin-bottom: 0.5rem;
  `,
  Loader: styled.div`
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
  `,
  Error: styled.div`
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding-top: 50px;
    background-color: rgba(255, 0, 0, 0.6);
    color: #fff;
    text-align: center;
    font-weight: 700;
  `,
  NoData: styled.div`
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding-top: 50px;
    color: ${(props) => props.theme.slips.text};
    text-align: center;
    font-weight: 700;
  `,
};
