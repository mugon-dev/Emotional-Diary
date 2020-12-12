import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const JoinStyle = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`;
const Join = () => {
  //user변수 선언
  const [user, setUser] = useState({
    id: '',
    pw: '',
    name: '',
    rePw: '',
  });
  //비밀번호 확인 할때 띄어줄 메세지
  let pMessage = '';

  const history = useHistory();

  //input 데이터 들고오는 함수
  function inputHandle(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    checkPw();
  }

  //초기화 하는 함수
  function reset(e) {
    e.preventDefault();
    setUser({
      id: '',
      pw: '',
      name: '',
      rePw: '',
    });
  }

  //비밀번호와 비밀번호 확인이 같은지 다른지 판별해 주는 함수
  function checkPw() {
    console.log('check 들어옴');
    if (user.pw === user.rePw) {
      pMessage = '일치합니다';
      console.log(pMessage);
    } else if (user.pw !== user.reRw) {
      pMessage = '불일치';
      console.log(pMessage);
    }
  }

  function checkId(e) {
    e.preventDefault();
  }

  //가입하는 함수
  function submitJoin(e) {
    e.preventDefault();

    fetch('', {
      method: 'POST',
      headers: {},
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === 'ok') {
          alert('가입을 했습니다.');
          history.push('/login');
        } else {
          alert('가입을 실패했습니다.');
        }
      });
  }
  return (
    <JoinStyle>
      <div>워드 클라우드</div>
      <div>
        <h3>회원 가입</h3>
        <label>아이디</label>
        <input
          type="text"
          name="id"
          value={user.id}
          onChange={inputHandle}
          placeholder="아이디를 입력하세요"
        />
        <button onClick={checkId}>중복확인</button>
        <br />

        <label>이름</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={inputHandle}
          placeholder="이름 또는 닉네임을 입력하세요"
        />
        <br />
        <label>비밀번호</label>
        <input
          type="password"
          name="pw"
          value={user.pw}
          onChange={inputHandle}
          placeholder="비밀번호를 입력하세요"
        />
        <br />
        <label>비밀번호 확인 </label>
        <input
          type="password"
          name="rePw"
          value={user.rePw}
          onChange={inputHandle}
          placeholder="한번 더 입력하세요."
        />
        <br />
        <div>
          <Link to="/login">
            <button onClick={reset}>취소</button>
          </Link>
          <button onClick={submitJoin}>회원가입</button>
        </div>
      </div>
    </JoinStyle>
  );
};

export default Join;
