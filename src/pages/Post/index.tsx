import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import { blogList } from "../../constants/list";
import { useLocation, useParams } from "react-router";
import * as MDStyle from "../../components/posts/markdown";

const PostView: React.FC = () => {
  const location = useLocation();
  const { id } = useParams();
  // console.log(params);
  const [data, setData] = useState(() => {
    if (location.state?.post)
      return {
        isGet: true,
        post: location.state?.post,
      };
    return {
      isGet: false,
      post: "",
    };
  });

  useEffect(() => {
    const getData = async () => {
      try {
        if (!data.isGet) {
          const response = await axios.get(
            `https://raw.githubusercontent.com/maintainker/blog/main/public/post/${
              blogList[Number(id)].file
            }`
          );
          setData({ isGet: true, post: response.data });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [data.isGet, id]);
  return (
    <Container>
      <div className="content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeKatex]}
          components={{
            h1: "h2",
            code: MDStyle.Code,
            ul: ({ ...props }) => (
              <ul style={{ listStyle: "inside" }} {...props} />
            ),
            em: ({ ...props }) => <i style={{ color: "red" }} {...props} />,
          }}
        >
          {data.post}
        </ReactMarkdown>
      </div>
    </Container>
  );
};

export default PostView;

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
