import React from 'react';

const Modify = () => {
  return (
    <div>
      <h1>회원정보 수정</h1>
      <div>워드 클라우드</div>
      <div>
        <label>id</label>
        <div> id 보여줌</div>
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
          <button>취소</button>
          <button>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default Modify;
