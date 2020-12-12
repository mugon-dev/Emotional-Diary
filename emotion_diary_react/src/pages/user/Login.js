import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { login } from '../../store';

const LoginBoxStyle = styled.div`
  display: grid;

  height: 500px;
  grid-template-columns: 50% 40%;
  border: 1px solid #003458;
  align-items: center;
  margin: 10px 10px;
`;
const InputStyle = styled.input`
  display: grid;
  height: 35px;
  width: 100%;
  color: rgb(100, 100, 100);
  font-size: 15px;
  border: 1px solid #003458;
  border-radius: 6px;
`;
const LabelStyle = styled.div`
  font-size: 23px;
`;
const ButtonBoxStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: end;
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
`;
const TitleStyle = styled.div`
  font-size: 60px;
  text-align: center;
`;

const Login = () => {
  const [user, setUser] = useState({
    id: '',
    pw: '',
  });

  const dispatch = useDispatch();
  const history = useHistory();

  function inputHandle(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function reset(e) {
    e.preventDefault();
    setUser({
      id: '',
      pw: '',
    });
  }

  const submitLogin = (e) => {
    e.preventDefault();

    fetch('http://10.100.102.31:8000/loginProc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        console.log('rrr', res);
        for (let header of res.headers.entries()) {
          if (header[0] === 'authorization') {
            localStorage.setItem('Authorization', header[1]);
          } else {
          }
        }

        // console.log('hhh', res.text());
        return res.text();
      })
      .then((res) => {
        console.log(res);
        if (res === 'ok') {
          localStorage.setItem('user', user.id);
          alert('로그인 완료');
          dispatch(login());
          history.push('/diary');
        } else {
          alert('아이디 혹은 비번을 다시 입력하세요!');
        }
      });
  };

  return (
    <div>
      <TitleStyle>당신의 감정은 어떠한가요 ?</TitleStyle>

      <LoginBoxStyle>
        <h1>워드 클라우드 사진</h1>
        <form>
          <LabelStyle>아이디</LabelStyle>
          <br />
          <InputStyle
            type="text"
            name="id"
            onChange={inputHandle}
            value={user.id}
          />
          <br />
          <LabelStyle>비밀번호</LabelStyle>
          <br />
          <InputStyle
            type="password"
            name="pw"
            onChange={inputHandle}
            value={user.pw}
          />
          <ButtonBoxStyle>
            <Link to="/join">
              <ButtonStyle>회원가입</ButtonStyle>
            </Link>
            <ButtonStyle onClick={submitLogin}>로그인</ButtonStyle>
            <ButtonStyle onClick={reset}>취소</ButtonStyle>
          </ButtonBoxStyle>
        </form>
      </LoginBoxStyle>
    </div>
  );
};

export default Login;
