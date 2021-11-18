import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import remarkGfm from "remark-gfm";
import { blogList } from "../../constants/list";

const PostPage: React.FC = () => {
  const [data, setData] = useState("");
  const getData = async () => {
    const response = await axios.get(
      `https://raw.githubusercontent.com/maintainker/blog/main/public${blogList[0].file}`,
    );
    console.log(response.data);
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <div className="content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{data}</ReactMarkdown>
      </div>
      <Info>123123</Info>
    </Container>
  );
};

export default PostPage;

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
