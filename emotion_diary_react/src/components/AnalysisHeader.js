import React, { useEffect, useState } from 'react';

const AnalysisHeader = () => {
  const [groups, setGroups] = useState([]);
  const [images, setImages] = useState();

  const [showImage, setShowImage] = useState(false);

  //그룹 목록 불러오는것
  useEffect(() => {
    fetch('http://10.100.102.31:8000/tmember/get', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setGroups(res);
      });
  }, []);

  return <div> 목록 </div>;
};

export default AnalysisHeader;
