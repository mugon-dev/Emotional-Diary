import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import MyDiary from '../pages/diary/MyDiary';
import MyDiaryDetail from '../pages/diary/MyDiaryDetail';
import MyDiaryModify from '../pages/diary/MyDiaryModify';
import MyDiaryWrite from '../pages/diary/MyDiaryWrite';
import OurDiary from '../pages/diary/OurDiary';
import Modify from '../pages/user/Modify';

const MainStyle = styled.div`
  display: grid;
  overflow: scroll;
  grid-column-gap: 10px;
  margin: 20px 20px;
  //grid-template-columns: 70% 30%;
  justify-content: space-around;
  border: 2px solid #003458;
  border-radius: 10px;

  &::-webkit-scrollbar {
    /* 세로 스크롤 넓이 */
    width: 8px;

    /* 가로 스크롤 높이 */
    height: 8px;

    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

const Main = () => {
  return (
    <MainStyle>
      <Switch>
        <Route exact path="/diary/" component={MyDiary} />
        <Route path="/diary/modify" component={Modify} />
        <Route path="/diary/our" component={OurDiary} />
        <Route path="/diary/write" component={MyDiaryWrite} />
        <Route path="/diary/detail" component={MyDiaryDetail} />
        <Route path="/diary/modify" component={MyDiaryModify} />
      </Switch>
    </MainStyle>
  );
};

export default Main;
