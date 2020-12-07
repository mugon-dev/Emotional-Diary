import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IntroStyle = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
`;
const TitleStyle = styled.div`
  font-family: 'UhBeeSeulvely';
  font-size: 50px;
`;
const Intro = () => {
  return (
    <IntroStyle>
      <TitleStyle>Emotional Diary!</TitleStyle>
      <Link to="/login">
        <buttom>시작하기</buttom>
      </Link>
    </IntroStyle>
  );
};

export default Intro;
