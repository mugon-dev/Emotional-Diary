import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Main from '../../components/Main';

const DiaryHomeStyle = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
`;
const DiaryHome = () => {
  return (
    <DiaryHomeStyle>
      <Header />
      <Main />
    </DiaryHomeStyle>
  );
};

export default DiaryHome;
