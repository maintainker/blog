import React from "react";
import styled from "styled-components";

const InlineCode: React.FC = ({ children }) => {
  return (
    <InLineWrapper>
      <Inline>{children}</Inline>
    </InLineWrapper>
  );
};

export default InlineCode;

const InLineWrapper = styled.div`
  width: 100%;
  overflow: scroll;
`;
const Inline = styled.span``;
