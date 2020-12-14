import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import jwt_decode from 'jwt-decode';
import { login } from '../../store';

const LoginStyle = styled.div`
  display: grid;
`;
const LoginBoxStyle = styled.div`
  display: grid;
  height: 500px;
  grid-template-columns: 50% 40%;
  // border: 1px solid #003458;
  align-items: center;
  margin: 10px 10px;
`;
/* const InputStyle = styled.input`
  display: grid;
  height: 35px;
  width: 100%;
  color: rgb(100, 100, 100);
  font-size: 15px;
  border: 1px solid #003458;
  border-radius: 6px;
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
*/
const LabelStyle = styled.div`
  font-size: 23px;
`;
const ButtonBoxStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 10px;
  justify-content: end;
  margin: 10px;
`;
const TitleStyle = styled.div`
  font-size: 60px;
  text-align: center;
  border: 1px solid #003458;
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

  // function jwttoken() {
  //   let mid = 0;
  //   if (localStorage.getItem('Authorization') != null) {
  //     let jwtTokenTemp = localStorage.getItem('Authorization');
  //     let jwtToken = jwtTokenTemp.replace('Bearer ', '');
  //     console.log('토큰 : ', jwtToken);
  //     mid = jwt_decode(jwtToken).id;
  //     console.log('mid', mid);
  //     localStorage.setItem('id', mid);
  //   }
  // }

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
          //유저네임 저장
          alert('로그인 완료');
          dispatch(login());
          history.push('/diary');
          // jwttoken();
          fetch('http://10.100.102.31:8000/member/get', {
            method: 'GET',
            headers: {
              Authorization: localStorage.getItem('Authorization'),
            },
          }).then((res)=>res.json()).then((res)=>{
            localStorage.setItem('userNo', res.mno);
            localStorage.setItem('userId', res.id);
            localStorage.setItem('userName', res.name);
          })
        } else {
          alert('아이디 혹은 비번을 다시 입력하세요!');
        }
      });
  };
  return (
    <LoginStyle>
      <TitleStyle>당신의 감정은 어떠한가요 ?</TitleStyle>
      <LoginBoxStyle>
        <h1>워드 클라우드 사진</h1>
        <form>
          <div class="form-group">
            <LabelStyle>아이디</LabelStyle>
            <input
              class="form-control form-control-lg"
              type="text"
              name="id"
              onChange={inputHandle}
              value={user.id}
            />
          </div>
          <div class="form-group">
            <LabelStyle>비밀번호</LabelStyle>
            <input
              class="form-control form-control-lg"
              type="password"
              name="pw"
              onChange={inputHandle}
              value={user.pw}
            />
          </div>
          <ButtonBoxStyle>
            <Link to="/join">
              <button type="button" class="btn btn-secondary">
                회원가입
              </button>
            </Link>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={submitLogin}
            >
              로그인
            </button>
            <button type="button" class="btn btn-secondary" onClick={reset}>
              취소
            </button>
          </ButtonBoxStyle>
        </form>
      </LoginBoxStyle>
    </LoginStyle>
  );
};

export default Login;
