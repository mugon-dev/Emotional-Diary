import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const JoinStyle = styled.div`
  display: grid;
  height: 500px;
  grid-template-columns: 50% 40%;
  align-items: center;
  margin: 10px 10px;
`;
const LabelStyle = styled.div`
  font-size: 23px;
`;
const TitleStyle = styled.div`
  font-size: 50px;
  text-align: center;
  margin: 20px 20px;
`;
const IdBoxStyle = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 10px;
`;
const ButtonBoxStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 10px;
  justify-content: end;
  margin: 10px;
`;
const Join = () => {
  const history = useHistory();

  //user변수 선언
  const [user, setUser] = useState({
    id: '',
    pw: '',
    name: '',
  });
  //비밀번호 확인 할때 띄어줄 메세지
  let pMessage = '8자 이상 적어주세요';

  useEffect(() => {}, [pMessage]);
  //input 데이터 들고오는 함수
  function inputHandle(e) {
    setUser((prevState) => {
      // 함수형으로 쓰는 이유 : setstate 두번쓸때 값을 들고오기 우ㅐㅎ서
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }

  function CheckHandle(e) {
    setUser((prevState) => {
      // 함수형으로 쓰는 이유 : setstate 두번쓸때 값을 들고오기 우ㅐㅎ서
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }

  //초기화 하는 함수
  function reset(e) {
    e.preventDefault();
    setUser({
      id: '',
      pw: '',
      name: '',
    });
  }

  //비밀번호와 비밀번호 확인이 같은지 다른지 판별해 주는 함수
  function checkPw() {
    console.log('check 들어옴');
    if (user.pw === user.rePw) {
      pMessage = '일치합니다';
      console.log(pMessage);
    } else {
      pMessage = '다시 적어주세요!';
      console.log(pMessage);
    }
  }

  function checkId(e) {
    e.preventDefault();

    fetch('', {}).then().then();
  }

  //가입하는 함수
  function submitJoin(e) {
    e.preventDefault();
    console.log(user);
    fetch('http://10.100.102.31:8000/member/join', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(user),
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
    <div>
      <TitleStyle>회원 가입</TitleStyle>
      <JoinStyle>
        <div>워드 클라우드</div>
        <form>
          <div class="form-group">
            <LabelStyle>아이디</LabelStyle>
            <IdBoxStyle>
              <input
                class="form-control form-control-lg"
                type="text"
                name="id"
                value={user.id}
                onChange={inputHandle}
                placeholder="아이디를 입력하세요"
              />
              <button
                type="button"
                class="btn btn-secondary btn-sm"
                onClick={checkId}
              >
                중복확인
              </button>
            </IdBoxStyle>
          </div>
          <div class="form-group">
            <LabelStyle>이름</LabelStyle>
            <input
              class="form-control form-control-lg"
              type="text"
              name="name"
              value={user.name}
              onChange={inputHandle}
              placeholder="이름 또는 닉네임을 입력하세요"
            />
          </div>
          <div class="form-group">
            <LabelStyle>비밀번호</LabelStyle>
            <input
              class="form-control form-control-lg"
              type="password"
              name="pw"
              value={user.pw}
              onChange={inputHandle}
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          {/*  <div class="form-group">
            <LabelStyle>비밀번호 확인 </LabelStyle>
            <input
              class="form-control form-control-lg"
              type="password"
              name="rePw"
              value={user.rePw}
              onChange={CheckHandle}
              placeholder="한번 더 입력하세요."
            />
          </div>
          <h3>확인 : {pMessage}</h3> */}
          <ButtonBoxStyle>
            <Link to="/login">
              <button type="button" class="btn btn-secondary" onClick={reset}>
                취소
              </button>
            </Link>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={submitJoin}
            >
              회원가입
            </button>
          </ButtonBoxStyle>
        </form>
      </JoinStyle>
    </div>
  );
};

export default Join;
