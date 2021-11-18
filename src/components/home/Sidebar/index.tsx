import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import PostTags from "./Tags";

const Sidebar: React.FC = () => {
  return (
    <StyledSidebar>
      <PostTags />
      <Profile />
    </StyledSidebar>
  );
};

export default Sidebar;

const StyledSidebar = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  width: 210px;

  section {
    border-top: 1px solid #dcdcdc;
    padding: 12px 8px;
  }
`;
