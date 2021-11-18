import React from "react";
import styled from "styled-components";
import { VscBold } from "react-icons/vsc";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
const Profile: React.FC = () => {
  return (
    <section>
      <h3>Who is SSul~</h3>
      <ImageWrapper>
        <img src="/image/profile.jpeg" alt="프로필사진" />
      </ImageWrapper>
      <MyComment>
        日新又日新 <br /> 어제보다 나은 오늘이 되기를
      </MyComment>

      <SNSwrapper>
        <li>
          <VscBold />
        </li>
        <li>
          <AiOutlineInstagram />
        </li>
        <li>
          <FiGithub />
        </li>
      </SNSwrapper>
      <Mailto href="mailto:syhwan88@gmail.com">✉️ syhwan88@gmail.com</Mailto>
    </section>
  );
};

export default Profile;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 20px;
  img {
    width: 100%;
  }
`;
const MyComment = styled.p`
  color: #a3a3a3;
  font-size: 16px;
  line-height: 1.5;
`;

const SNSwrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  li {
    width: 46px;
    height: 46px;
    background: #a3a3a3;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    svg {
      width: 75%;
      height: 75%;
      fill: #fff;
      stroke: transparent;
    }
  }
`;

const Mailto = styled.a`
  margin: 20px 0;
  display: block;
  text-align: center;
  color: #a3a3a3;
`;
