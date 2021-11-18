import React from "react";
import styled from "styled-components";
import { BlogInfo } from "../../constants/list";

interface props {
  info: BlogInfo[];
}

const CardList: React.FC<props> = ({ info = [] }) => {
  return <StyledList></StyledList>;
};

export default CardList;

const StyledList = styled.section`
  width: 100%;
  height: 500px;
  background: red;
`;
