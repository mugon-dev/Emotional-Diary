import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ModifyStyle = styled.div`
  display: grid;
  grid-template-columns: auto;
  width: 700px;
  padding: 50px 10px 10px 10px;
  // border: 1px solid #003458;
`;
const LabelStyle = styled.div`
  font-size: 23px;
`;

const ButtonBoxStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
  justify-content: end;
  margin: 10px;
`;
const Modify = (props) => {
  const id = props.match.params.id;
  const [user, setUser] = useState({
    id: '',
    name: '',
    pw: '',
  });
  useEffect(() => {
    fetch('http://10.100.102.31:8000/member/get/',{
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
        console.log('res', res);
        console.log('user', user);
      });
  }, []);
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
    <ModifyStyle>
      <form>
        회원 정보를 수정 해주세요
        <div class="form-group">
          <LabelStyle>userId</LabelStyle>
          <input
            class="form-control form-control-lg"
            type="text"
            name="userId"
            onChange={inputHandle}
            value={user.id}
            readOnly={true}
          />
        </div>
        <div class="form-group">
          <LabelStyle>userName</LabelStyle>
          <input
            class="form-control form-control-lg"
            type="text"
            name="userName"
            onChange={inputHandle}
            value={user.name}
          />
        </div>
        <div class="form-group">
          <LabelStyle>pw</LabelStyle>
          <input
            class="form-control form-control-lg"
            type="password"
            name="password"
            onChange={inputHandle}
            value={user.pw}
          />
        </div>
        <div class="form-group">
          <LabelStyle>pw 확인 </LabelStyle>
          <input
            class="form-control form-control-lg"
            type="password"
            name="rePassword"
            value={user.rePassword}
            onChange={inputHandle}
          />
        </div>
        <ButtonBoxStyle>
          <button type="button" class="btn btn-secondary" onClick={reset}>
            취소
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={submitModify}
          >
            수정
          </button>
        </ButtonBoxStyle>
      </form>
    </ModifyStyle>
  );
};

export default Modify;
