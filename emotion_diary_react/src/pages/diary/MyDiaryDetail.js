import React, { useEffect, useState } from 'react';

const MyDiaryDetail = () => {
  //
  const [diary, setDiary] = useState({
    id: '',
    title: '',
    content: '',
    image1: '',
  });

  return (
    <div>
      <div>title</div>
      <div>image</div>
      <div>content</div>
    </div>
  );
};

export default MyDiaryDetail;
