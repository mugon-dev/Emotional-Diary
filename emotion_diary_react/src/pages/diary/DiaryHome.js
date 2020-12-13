import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/Header';
import Main from '../../components/Main';

const DiaryHomeStyle = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  max-width: 0100%;
`;
const DiaryHome = () => {
  const isLogin = useSelector((store) => store.isLogin);
  console.log(isLogin);
  return (
    <DiaryHomeStyle>
      <Header />
      <Main />
    </DiaryHomeStyle>
  );
};

export default DiaryHome;
