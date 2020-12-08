import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyle = styled.div`
  display: grid;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <h1>Header</h1>
      <Link to="/modify">회원 정보 수정</Link>
      <Link to="/diary/">나의 일기</Link>
      <Link to="/diary/our">우리 일기</Link>
      <h3>감정분석</h3>
      <Link to="/login">로그아웃</Link>
    </HeaderStyle>
  );
};

export default Header;
