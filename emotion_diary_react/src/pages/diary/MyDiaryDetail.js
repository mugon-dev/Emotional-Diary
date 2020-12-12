import React, { useState } from 'react';

const MyDiaryDetail = () => {
  //
  const [diary, setDiary] = useState({
    id: '',
    title: '',
    content: '',
    image1: '',
  });

  function inputHandle(e) {
    setDiary({
      ...diary,
      [e.target.name]: e.target.value,
    });
  }
  function reset(e) {
    e.preventDefault();
    setDiary({
      id: '',
      title: '',
      content: '',
      image: '',
    });
  }
  return (
    <div>
      <div>title</div>
      <div>image</div>
      <div>content</div>
    </div>
  );
};

export default MyDiaryDetail;
