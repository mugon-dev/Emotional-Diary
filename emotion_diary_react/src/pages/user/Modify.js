import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Modify = () => {
  const history = useHistory();

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
      <div>
        <label>userId</label>
        <div>{user.userId}</div>
        <br />
        <label>userName</label>
        <input
          type="text"
          name="userName"
          onChange={inputHandle}
          value={user.userName}
        />
        <br />
        <label>pw</label>
        <input
          type="password"
          name="password"
          onChange={inputHandle}
          value={user.password}
        />
        <br />
        <label>pw 확인 </label>
        <input
          type="password"
          name="rePassword"
          value={user.rePassword}
          onChange={inputHandle}
        />
        <br />
        <div>
          <button>취소</button>
          <button onClick={submitModify}>수정</button>
        </div>
      </div>
    </div>
  );
};

export default Modify;
