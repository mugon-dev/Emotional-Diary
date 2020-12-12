import React, { useState } from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
  height: 35px;
  width: 100%;
  color: rgb(100, 100, 100);
  font-size: 15px;
  border: 1px solid #003458;
  border-radius: 6px;
  margin: 10px 10px;
`;
const ModifyStyle = styled.div`
  display: grid;
  grid-template-columns: 20% 100%;
`;
const LabelBoxStyle = styled.div`
  display: grid;
`;
const InputBoxStyle = styled.div`
  display: grid;
`;
const ButtonBoxStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: end;
`;
const Modify = () => {
  const [user, setUser] = useState({
    userId: '',
    userName: '',
    password: '',
    rePassword: '',
  });

  function inputHandle(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function reset(e) {
    e.preventDefault();
    setUser({
      userId: '',
      password: '',
    });
  }
  function submitModify(e) {
    e.preventDefault();

    fetch().then().then();
  }

  return (
    <div>
      <ModifyStyle>
        <LabelBoxStyle>
          <label>userId</label>
          <label>userName</label>

          <label>pw</label>

          <label>pw 확인 </label>
        </LabelBoxStyle>
        <InputBoxStyle>
          <div>{user.userId}</div>
          <br />

          <InputStyle
            type="text"
            name="userName"
            onChange={inputHandle}
            value={user.userName}
          />
          <br />
          <InputStyle
            type="password"
            name="password"
            onChange={inputHandle}
            value={user.password}
          />
          <br />
          <InputStyle
            type="password"
            name="rePassword"
            value={user.rePassword}
            onChange={inputHandle}
          />
          <br />
        </InputBoxStyle>
        <ButtonBoxStyle>
          <button onClick={reset}>취소</button>
          <button onClick={submitModify}>수정</button>
        </ButtonBoxStyle>
      </ModifyStyle>
    </div>
  );
};

export default Modify;
