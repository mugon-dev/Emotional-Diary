import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/Header';
import Main from '../../components/Main';

const DiaryHomeStyle = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 15% 85%;
  align-items: center;
  justify-items: center;
  justify-content: space-around;
`;
const DiaryHome = () => {
  const isLogin = useSelector((store) => store.isLogin);
  console.log(isLogin);
  const [groups, setGroups] = useState();

  useEffect(() => {
    fetch('http://10.100.102.31:8000/tmember/get', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('res', res);
        setGroups(res);
      });
  }, []);

  console.log('ggg', groups);

  return (
    <DiaryHomeStyle>
      <Header groups={groups} />
      <Main />
    </DiaryHomeStyle>
  );
};

export default DiaryHome;
