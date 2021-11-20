import React from "react";
import styled from "styled-components";
import { blogList } from "../../constants/list";
import PostCard from "./card";
import Sidebar from "./Sidebar";

const CardList: React.FC = () => {
  return (
    <div className="container">
      <h2>Posting List</h2>
      <StyledMain>
        <StyledList>
          {blogList.map((post, idx) => (
            <PostCard data={{ ...post, idx }} key={idx} />
          ))}
        </StyledList>
        <Sidebar />
      </StyledMain>
    </div>
  );
};

export default CardList;

const StyledList = styled.section`
  width: 100%;
  padding-right: 250px;
`;
const StyledMain = styled.main`
  position: relative;
`;
