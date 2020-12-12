import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../store';

const HeaderStyle = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: right;
  border: 2px solid #003458;
  border-radius: 10px;
  margin: 20px 20px;
  font-size: 22px;
  background-color: #eaeae3;
`;
const LinkStyle = styled.button`
  background-color: transparent;
  border: transparent;
  outline: transparent;
`;
const UserBoxStyle = styled.div``;
const Header = () => {
  const isLogin = useSelector((store) => store.isLogin);
  const dispatch = useDispatch();
  function submitLogout() {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('user');
    dispatch(logout());
    console.log(isLogin);
  }

  return (
    <HeaderStyle>
      <img src="" alt="" />
      <UserBoxStyle>
        <h2>김소연님</h2>
        <Link to="/diary/modify">
          <h6>회원 정보 수정</h6>

          <Link to="/login">
            <LinkStyle onClick={submitLogout}>로그아웃</LinkStyle>
          </Link>
        </Link>
      </UserBoxStyle>
      <Link to="/diary/">
        <LinkStyle>나의 일기</LinkStyle>
      </Link>
      <Link to="/diary/our">
        <LinkStyle>우리 일기</LinkStyle>
      </Link>
    </HeaderStyle>
  );
};

export default Header;
