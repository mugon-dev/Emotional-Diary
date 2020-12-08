import './App.css';
import { Route, Switch } from 'react-router-dom';
import Intro from './pages/Intro';
import Login from './pages/user/Login';
import Join from './pages/user/Join';
import DiaryHome from './pages/diary/DiaryHome';
import OurDiary from './pages/diary/OurDiary';
import styled from 'styled-components';

const AppStyle = styled.div`
  font-family: 'TDTDTadakTadak';
  background-color: #eaeae3;
`;
function App() {
  return (
    <AppStyle>
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route path="/login" component={Login} />
        <Route path="/join" component={Join} />
        <Route path="/diary" component={DiaryHome} />
      </Switch>
    </AppStyle>
  );
}

export default App;
