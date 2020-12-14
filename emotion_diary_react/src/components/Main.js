import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import DiaryModify from '../pages/diary/DiaryModify';
import DiaryWrite from '../pages/diary/DiaryWrite';
import DiaryDetail from '../pages/diary/DiaryDetail';
import MyDiary from '../pages/diary/MyDiary';
import Modify from '../pages/user/Modify';
import OurDiary from '../pages/diary/OurDiary';

const MainStyle = styled.div`
  display: grid;
  grid-template-columns: auto;
  height: 90%;
  width: 95%;
  //overflow: scroll;
  //margin: 25px 25px;
  justify-content: center;
  justify-items: center;
  border: 2px solid #003458;
  border-radius: 10px;
  background-color: #eaeae3;

  /* &::-webkit-scrollbar {
    //세로 스크롤 넓이 
    width: 8px;

    // 가로 스크롤 높이 
    height: 8px;

    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  } */
`;

const Main = () => {
  return (
    <MainStyle>
      <Switch>
        <Route exact path="/diary/" component={MyDiary} />
        <Route exact path="/diary/:id" component={OurDiary} />
        <Route path="/diary/usermodify/:id" component={Modify} />
        <Route path="/diary/modify/:id" component={DiaryModify} />
        <Route path="/diary/detail/:id" component={DiaryDetail} />
        <Route path="/diary/write/:date" component={DiaryWrite} />
      </Switch>
    </MainStyle>
  );
};

export default Main;
