import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IntroStyle = styled.div`
  display: grid;
  height: 1050px;
  grid-template-columns: auto;
  justify-content: center;
  align-items: center;
  border: 1px solid #003458;
`;
const TitleStyle = styled.div`
  font-size: 80px;
  text-align: center;
  border: 1px solid #003458;
`;
const ButtonStyle = styled.button`
  background-color: transparent;
  color: #003458;
  width: 80px;
  height: 45px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 6px;
  border: 1px solid #003458;
  cursor: pointer;
  margin: 10px;
  text-align: center;
`;
const buttonBoxStyle = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  border: 1px solid #003458;
`;
const Intro = () => {
  return (
    <IntroStyle>
      <TitleStyle>Emotional Diary!</TitleStyle>
      <buttonBoxStyle>
        <Link to="/login">
          <ButtonStyle>시작하기</ButtonStyle>
        </Link>
      </buttonBoxStyle>
    </IntroStyle>
  );
};

export default Intro;
