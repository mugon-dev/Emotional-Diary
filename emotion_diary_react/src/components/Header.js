import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../store';

const HeaderStyle = styled.div`
  display: grid;
  width: 100%;
  height: 90%;
  grid-template-columns: 100%;
  align-content: center;
  justify-content: right;
  border: 2px solid #003458;
  border-radius: 10px;
  padding: 10px 10px;
  font-size: 20px;
  font-weight: bold;
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
const GroupStyle = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
`;

const Header = () => {
  const isLogin = useSelector((store) => store.isLogin);
  const user = localStorage.getItem('userName');
  const dispatch = useDispatch();

  const [groups, setGroups] = useState([]);
  useEffect(() => {
    fetch('http://10.100.102.31:8000/tmember/get', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setGroups(res);
      });
  }, []);

  //로그아웃
  function submitLogout() {
    localStorage.clear();
    dispatch(logout());
    console.log(isLogin);
  }
  console.log(groups);

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
      <div>
        우리 일기
        <Link to="/diary/join">
          <LinkStyle>++</LinkStyle>
        </Link>
      </div>
      <div>
        {groups.map(({ tmno, member, together }) => (
          <GroupStyle key={tmno}>
            <Link to={'/diary/our/' + together.tno}>
              <LinkStyle>{together.tname}</LinkStyle>
              {/*    <button type="button" className="btn btn-warning btn-sm">
                수정
              </button> */}
              <span class="badge badge-pill badge-warning-sm">수정</span>
            </Link>
          </GroupStyle>
        ))}
      </div>
    </HeaderStyle>
  );
};

export default Header;
