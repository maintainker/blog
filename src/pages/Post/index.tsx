import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import { blogList } from '../../constants/list';
import { useLocation, useParams } from 'react-router';
import * as MDStyle from '../../components/posts/markdown';

const PostView: React.FC = () => {
  const location = useLocation();
  const { id } = useParams();
  const [data, setData] = useState(() => {
    const thisState: {
      isGet: boolean;
      post: string;
      imageUrl: string;
    } = {
      isGet: false,
      post: '',
      imageUrl: 'https://raw.githubusercontent.com/maintainker/blog/main/public/image/post-bg-desk.jpeg',
    };
    if (location.state?.post) {
      thisState.isGet = true;
      thisState.post = location.state.post;
    }

    if (location.state?.imageUrl) {
      thisState.imageUrl = location.state.imageUrl;
    }
    return thisState;
  });

  useEffect(() => {
    const getData = async () => {
      try {
        if (!data.isGet) {
          const response = await axios.get(
            `https://raw.githubusercontent.com/maintainker/blog/main/public/post/${blogList[Number(id)].file}`,
          );
          setData({ ...data, isGet: true, post: response.data });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [data.isGet, id]);
  return (
    <Content>
      <Thumbnail imageUrl={data.imageUrl}>
        <InfoBox>
          <h1>{blogList[Number(id)].title}</h1>
          <p>{blogList[Number(id)].subtitle}</p>
        </InfoBox>
      </Thumbnail>
      <div className="container">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeKatex]}
          components={{
            h1: 'h2',
            code: MDStyle.Code,
            ul: ({ ...props }) => <ul style={{ listStyle: 'inside' }} {...props} />,
            em: ({ ...props }) => <i style={{ color: 'red' }} {...props} />,
          }}
        >
          {data.post}
        </ReactMarkdown>
      </div>
    </Content>
  );
};

export default PostView;
const Thumbnail = styled.section<{ imageUrl: string }>`
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
  background-image: url(${(p) => p.imageUrl});
  background-position: center;
  background-size: cover;
`;
const InfoBox = styled.section`
  min-width: 350px;
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.4);
  padding: 20px;
  color: #fff;
  h1 {
    margin-top: 0;
    font-size: 2em;
  }
`;
const Content = styled.section`
  width: 100%;
  padding: 0 0 60px;
`;
