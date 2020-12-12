import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const MyDiaryModify = () => {
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
  return (
    <div>
      <form>
        <input type="text" name="title" value={diary.title} />
        <textarea name="content">{diary.content}</textarea>
        <input type="file" name="image" value={diary.image1} />
      </form>
    </div>
  );
};

export default MyDiaryModify;
