import React from "react";
import styled from "styled-components";

const PostTags: React.FC = () => {
  return (
    <section>
      <h3>Feature Tags</h3>
      <StyledTagList>
        <li>iOS</li>
        <li>쉐리</li>
        <li>몽고</li>
        <li>천진반</li>
        <li>뭐할까</li>
        <li>iOS</li>
        <li>쉐리</li>
        <li>몽고</li>
        <li>Runtime</li>
        <li>뭐할까</li>
        <li>iOS</li>
        <li>쉐리</li>
        <li>몽고</li>
        <li>Runtime</li>
        <li>천진반</li>
        <li>뭐할까</li>
        <li>iOS</li>
        <li>쉐리</li>
        <li>몽고</li>
        <li>천진반</li>
        <li>Runtime</li>
      </StyledTagList>
    </section>
  );
};

export default PostTags;

const StyledTagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  li {
    font-size: 12px;
    color: #aaa;
    padding: 3px 12px;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-right: 12px;
    margin-bottom: 8px;
    cursor: pointer;
    &:hover {
      color: #333;
    }
  }
`;
