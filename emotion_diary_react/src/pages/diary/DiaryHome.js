import React from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main';

const DiaryHomeStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;
const DiaryHome = () => {
  return (
    <DiaryHomeStyle>
      <Header />
      <Main />
      <Footer />
    </DiaryHomeStyle>
  );
};

export default DiaryHome;
