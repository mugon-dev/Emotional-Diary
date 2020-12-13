import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
const ButtonBoxStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 10px;
  justify-content: end;
  margin: 10px;
`;
const MyDiaryWriteStyle = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: 100%;
  padding: 10px 10px;
  border: 1px solid #003458;
`;
const MyDiaryFormStyle = styled.form`
  display: grid;
  align-content: center;
  grid-template-columns: 100%;
  padding: 10px 10px;
  border: 1px solid #003458;
`;
const MyDiaryWrite = () => {
  const history = useHistory();

  const [diary, setDiary] = useState({
    id: '',
    title: '',
    content: '',
    image1: '',
  });
  const uploadImg = async (e) => {
    const file = e.target.files[0];
    setDiary((prevState) => {
      return {
        ...prevState,
        [e.target.name]: file,
      };
    });
  };
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

    //let form = document.getElementById('form');
    //const formData = new FormData(form);

    /* if (board3.image1 === '' && board3.image2 === '') {
      alert('사진을 한장이상 업로드 해주세요!');
    } else {
      console.log('fetch 실행');
      fetch('http://localhost:8000/board3/write', {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('Authorization'),
        },
        body: formData,
      })
        .then((res) => res.text())
        .then((res) => {
          if (res === 'ok') {
            alert('글이 등록되었습니다.');
            //history.push("/board3");
          } else {
          }
        });
    } */
  }
  return (
    <MyDiaryWriteStyle>
      <form>
        <label>제목</label>
        <input
          class="form-control form-control-lg"
          type="text"
          name="title"
          value={diary.title}
          onChange={inputHandle}
        />
        <label>내용</label>
        <textarea
          class="form-control form-control-lg"
          name="content"
          id="exampleTextarea"
          rows="3"
        >
          {diary.content}
        </textarea>
        <label>사진</label>
        <input
          class="form-control-file"
          type="file"
          name="image"
          value={diary.image1}
          onChange={uploadImg}
        />
        <ButtonBoxStyle>
          <button class="btn btn-secondary" onClick={submitWrite}>
            작성
          </button>
          <Link to="/diary">
            <button class="btn btn-secondary">취소</button>
          </Link>
        </ButtonBoxStyle>
      </form>
    </MyDiaryWriteStyle>
  );
};

export default MyDiaryWrite;
