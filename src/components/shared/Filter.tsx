import React from "react";
import styled from "styled-components";

const StyledFilterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 2rem 2rem 0;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledFilter = styled.div<{
  $isActive: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 15px;
  background-color: ${(props) =>
    props.$isActive
      ? props.theme.filter.filterBackgroundActive
      : props.theme.filter.filterBackground};
  color: ${(props) =>
    props.$isActive ? props.theme.filter.textActive : props.theme.filter.text};
  border-radius: 30px;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 0.8rem;
  font-weight: 500;

  &:hover {
    background-color: ${(props) =>
      props.$isActive
        ? props.theme.filter.filterBackgroundActiveHover
        : props.theme.filter.filterBackgroundHover};
  }
`;

type Props = {
  current: string;
  categories: string[];
  onCategoryChange: (category: string) => void;
};

const Filter: React.FC<Props> = ({ current, categories, onCategoryChange }) => {
  const onFilterClick = (filter: string) => {
    if (filter !== current) {
      onCategoryChange(filter);
    }
  };
  return (
    <StyledFilterWrapper>
      <StyledFilter
        $isActive={current === "all"}
        onClick={() => onCategoryChange("all")}
      >
        All
      </StyledFilter>
      {categories.map((category) => (
        <StyledFilter
          key={category}
          $isActive={category?.toLowerCase() === current?.toLowerCase()}
          onClick={() => onFilterClick(category)}
        >
          {category}
        </StyledFilter>
      ))}
    </StyledFilterWrapper>
  );
};

export default Filter;
