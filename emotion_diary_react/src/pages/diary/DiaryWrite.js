import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
const ButtonBoxStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 10px;
  //justify-content: end;
  margin: 10px;
`;
const MyDiaryWriteStyle = styled.div`
  display: grid;
  //align-content: center;
  width: 100%;
  height: 100%;
  grid-template-columns: auto;
  padding: 10px 10px;
  border: 1px solid #003458;
`;
/* const MyDiaryFormStyle = styled.form`
  display: grid;
  align-content: center;
  grid-template-columns: 100%;
  max-width: 100%;
  padding: 10px 10px;
  border: 1px solid #003458;
`; */
const DiaryWrite = (props) => {
  const history = useHistory();
  const date = props.match.params.date;
  const id = localStorage.getItem('userNo');
  const [diary, setDiary] = useState({
    memberId: id,
    title: '',
    contents: '',
    createTime: date,
  });

  function inputHandle(e) {
    setDiary((prevState) => {
      // 함수형으로 쓰는 이유 : setstate 두번쓸때 값을 들고오기 우ㅐㅎ서
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }
  function submitWrite(e) {
    e.preventDefault();

    console.log('submitPost() 실행');

    fetch('http://10.100.102.31:8000/board/save', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(diary),
    })
      .then((res) => res.text())
      .then((res) => {
        console.log(res);
        console.log('gkdl', diary);
        if (res === 'ok') {
          alert('글이 등록되었습니다.');
          history.push('/diary');
        } else {
          alert('글 등록이 실패하였습니다.');
        }
      });
  }
  return (
    <MyDiaryWriteStyle>
      <form>
        <label>제목</label>
        <input
          className="form-control form-control-lg"
          type="text"
          name="title"
          value={diary.title}
          onChange={inputHandle}
        />
        <label>내용</label>
        <textarea
          className="form-control form-control-lg"
          name="contents"
          rows="3"
          onChange={inputHandle}
          value={diary.contents}
        ></textarea>
        <ButtonBoxStyle>
          <button className="btn btn-secondary" onClick={submitWrite}>
            작성
          </button>
          <Link to="/diary">
            <button className="btn btn-secondary">취소</button>
          </Link>
        </ButtonBoxStyle>
      </form>
    </MyDiaryWriteStyle>
  );
};

export default DiaryWrite;
