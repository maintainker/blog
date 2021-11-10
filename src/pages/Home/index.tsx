import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import postList from "../../postList";

// fs.readdir("/post", (err, fileList) => {
//   console.log(fileList);
// });
const Home: React.FC = () => {
  const [data, setData] = useState("");
  const getData = async () => {
    const response = await axios.get(
      `https://raw.githubusercontent.com/maintainker/blog/main/public${postList[0].file}`
    );
    console.log(response.data);
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Header>
        <Title>
          <h1>SSul's Blog</h1>
          <p>Thank you for comming here!</p>
        </Title>
      </Header>
      <Container>
        <div className='content'>
          <ReactMarkdown>{data}</ReactMarkdown>
        </div>
        <Info>123123</Info>
      </Container>
    </>
  );
};

export default Home;

// const Background = styled.div`
//   background: #121212;
//   min-height: 100vh;
// `;
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
const Container = styled.section`
  width: calc(100% - 100px);
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  .content {
    width: calc(100% - 230px);
  }
`;

const Info = styled.section`
  width: 220px;
`;
