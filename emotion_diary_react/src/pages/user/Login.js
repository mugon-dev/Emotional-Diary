import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginBoxStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;
const Login = () => {
  return (
    <div>
      <div>당신의 감정은 어떠한가요 ?</div>
      <LoginBoxStyle>
        <div>워드클라우드</div>
        <div>
          <label>id</label>
          <input type="text" name="id" />
          <br />
          <label>pw</label>
          <input type="password" name="pw" />
          <div>
            <Link to="/join">
              <button>회원가입</button>
            </Link>
            <Link to="/diary">
              <button>로그인</button>
            </Link>
          </div>
        </div>
      </LoginBoxStyle>
    </div>
  );
};

export default Login;
