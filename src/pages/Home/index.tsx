import React from "react";
import styled from "styled-components";

const Home: React.FC = () => {
  return (
    <>
      <Header>
        <Title>
          <h1>SSul's Blog</h1>
          <p>Thank you for comming here!</p>
        </Title>
      </Header>
    </>
  );
};

export default Home;

const Background = styled.div`
  background: #121212;
  min-height: 100vh;
`;
const Header = styled.header`
  background-image: url("/image/post-bg-desk.jpeg");
  background-size: cover;
  /* height: ; */
`;
const Title = styled.section`
  text-align: center;
  margin: 0 auto;
  padding: 150px 0;
  color: white;
  h1 {
    font-size: 4em;
    margin: 0;
  }
`;
