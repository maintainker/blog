import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BlogInfo } from "../../constants/list";

interface Datas extends BlogInfo {
  idx: number;
}

interface Props {
  data: Datas;
}
const enumMonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const PostCard: React.FC<Props> = ({ data }) => {
  const date = new Date(data.date);
  console.log(data);
  const [postData, setPostData] = useState<null | { id: number; post: string }>(
    null,
  );
  const getPostData = async () => {
    try {
      if (!postData) {
        const response = await axios.get(
          `https://raw.githubusercontent.com/maintainker/blog/main/public/post/${data.file}`,
        );
        setPostData({ id: data.idx, post: response.data });
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <StyledPost>
      <Link
        onMouseOver={getPostData}
        to={`/${data.idx}`}
        state={{ post: postData?.post }}
      >
        <h3>{data.title}</h3>
        <p className="subtitle">{data.subtitle}</p>
        <p className="description">{data.description}</p>
      </Link>
      <p className="date">
        Posted by BY on {enumMonth[date.getMonth()]} {date.getDate()},{" "}
        {date.getFullYear()}
      </p>
    </StyledPost>
  );
};

export default PostCard;

const StyledPost = styled.article`
  width: 100%;
  border-bottom: 1px solid #a3a3a3;
  padding: 20px 0;
  min-height: 200px;

  .subtitle {
    color: #404040;
  }
  .description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    color: #a3a3a3;
  }
  .date {
    color: gray;
  }
  a:hover {
    h3,
    .subtitle,
    .description {
      color: #0085a1;
    }
  }
`;
