import React from "react";
import { themeMode } from "../../types/app.type.ts";
import styled from "styled-components";
import SunIcon from "../../assets/sun.svg";
import MoonIcon from "../../assets/moon.svg";

type Props = {
  toggleMode: () => void;
  themeMode: themeMode;
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.header.background};
  color: ${(props) => props.theme.header.text};
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;
  z-index: 100;
`;

const StyledIconButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 6px;
  margin: 0;
  background-color: ${(props) => props.theme.header.iconBackground};
  border-radius: 23px;
`;

const Header: React.FC<Props> = ({ toggleMode, themeMode }) => {
  return (
    <HeaderWrapper>
      <div>Sports Betting</div>
      <StyledIconButton onClick={toggleMode}>
        <img
          src={themeMode === "light" ? MoonIcon : SunIcon}
          alt="Toggle Light/Dark Mode"
        />
      </StyledIconButton>
    </HeaderWrapper>
  );
};

export default Header;
