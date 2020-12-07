import React from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
  return (
    <div>
      회원가입
      <div>워드 클라우드</div>
      <div>
        <label>id</label>
        <input type="text" name="id" />
        <button>중복확인</button>
        <br />
        <label>pw</label>
        <input type="password" name="pw" />
        <br />
        <label>pw 확인 </label>
        <input type="password" name="pw" />
        <br />
        <label>이름</label>
        <input type="text" name="name" />
        <div>
          <Link to="/login">
            <button>취소</button>
          </Link>
          <button>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default Join;
