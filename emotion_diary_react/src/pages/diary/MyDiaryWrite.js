import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

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
    <div>
      <form>
        <input
          type="text"
          name="title"
          value={diary.title}
          onChange={inputHandle}
        />
        <textarea name="content">{diary.content}</textarea>
        <input
          type="file"
          name="image"
          value={diary.image1}
          onChange={uploadImg}
        />
        <button onClick={submitWrite}>작성</button>
        <Link to="/diary">
          <button>취소</button>
        </Link>
      </form>
    </div>
  );
};

export default MyDiaryWrite;
