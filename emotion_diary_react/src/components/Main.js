import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MyDiary from '../pages/diary/MyDiary';
import OurDiary from '../pages/diary/OurDiary';
const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/diary/" component={MyDiary} />
        <Route path="/diary/our" component={OurDiary} />
      </Switch>
    </div>
  );
};

export default Main;
