import React from "react";
import styled from "styled-components";
import { BlogInfo } from "../../constants/list";

interface Props {
  data: BlogInfo;
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
  console.log(date);
  return (
    <StyledPost>
      <h3>{data.title}</h3>
      <p className="subtitle">{data.subtitle}</p>
      <p className="description">{data.description}</p>
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
`;
