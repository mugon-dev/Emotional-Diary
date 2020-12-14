import React, { useEffect, useState } from 'react';

const MyDiaryDetail = (props) => {
  const [diary, setDiary] = useState([]);
  function diaryDetail(id) {
    fetch("http://10.100.102.31:8000/board/get/" + id,{
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setDiary(res);
      });
  }
  useEffect(() => {
    diaryDetail(props.match.params.id);
  }, []);
  

  return (
    <div>
      <div>{diary.bno}</div>
      <div>{diary.title}</div>
      <div>{diary.contents}</div>
      <div>{diary.createTime}</div>
      <div>{diary.emotion}</div>
    </div>
  );
};

export default MyDiaryDetail;
