import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IntroStyle = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-items: center;
  font-size: 45px;
  padding: 30px 0px 30px 0px;
`;
const ImageStyle = styled.img`
  margin-top: 100px;
  width: 600px;
  //border: 1px solid #003458;
`;
const ButtonStyle = styled.button`
  background-color: transparent;
  color: #003458;
  //width: 80px;
  //height: 45px;
  font-size: 15px;
  font-weight: 700;
  // border-radius: 6px;
  // border: 1px solid #003458;
  cursor: pointer;
  margin: 10px;
  text-align: center;
  border: 0;
  outline: 0;
  font-size: 35px;
`;
const buttonBoxStyle = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
`;
const Intro = () => {
  return (
    <IntroStyle>
      <ImageStyle src="images/logo.png" alt="" />
      당신의 속마음을 펼쳐보아요
      <buttonBoxStyle>
        <Link to="/login">
          <ButtonStyle>시작하기</ButtonStyle>
        </Link>
      </buttonBoxStyle>
    </IntroStyle>
  );
};

export default Intro;
