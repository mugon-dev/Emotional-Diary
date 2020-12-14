import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../store';

const HeaderStyle = styled.div`
  display: grid;
  min-height: 900px;
  min-width: 200px;
  grid-template-columns: auto;
  align-content: center;
  justify-content: right;
  border: 2px solid #003458;
  border-radius: 10px;
  margin: 20px 0px 20px 20px;
  padding: 10px 10px;
  font-size: 22px;
  background-color: #eaeae3;
`;
const LinkStyle = styled.button`
  background-color: transparent;
  font-family: 'TDTDTadakTadak';
  font-size: ${(props) => (props.user ? '15px' : '20px')};
  border: transparent;
  outline: transparent;
`;

const UserBoxStyle = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: right;
`;
const Header = (props) => {
  console.log('header');
  const isLogin = useSelector((store) => store.isLogin);
  const user = localStorage.getItem('userName');
  const dispatch = useDispatch();

  const [groups, setGroups] = useState(props.groups);

  console.log('propsgroup', groups);
  //로그아웃
  function submitLogout() {
    localStorage.clear();
    dispatch(logout());
    console.log(isLogin);
  }

  return (
    <HeaderStyle>
      <img alt="" src="" />
      <h2>{user}님</h2>
      <UserBoxStyle>
        <Link to={'/diary/usermodify/' + user}>
          <LinkStyle user>회원 정보 수정</LinkStyle>
        </Link>
        <Link to="/login">
          <LinkStyle user onClick={submitLogout}>
            로그아웃
          </LinkStyle>
        </Link>
      </UserBoxStyle>

      <Link to="/diary/">
        <LinkStyle>나의 일기</LinkStyle>
      </Link>
      <LinkStyle>우리 일기</LinkStyle>
      <div>
        그룹목록
        <ul>aa</ul>
        <ul>bb</ul>
        <ul>cc</ul>
        {/*  {groups !== null
          ? groups.map((group) => (
              <div key={group.tno}>
                <Link to={'/diary/' + group.tno}>{group.tname}</Link>
              </div>
            ))
          : null} */}
      </div>
    </HeaderStyle>
  );
};

export default Header;
