import './App.css';
import { Route, Switch } from 'react-router-dom';
import Intro from './pages/Intro';
import Login from './pages/user/Login';
import Join from './pages/user/Join';
import DiaryHome from './pages/diary/DiaryHome';
import styled from 'styled-components';
import Footer from './components/Footer';

const AppStyle = styled.div`
  min-height: 1050px;
  font-family: 'TDTDTadakTadak';
  background-color: #eaeae3;
  padding: 10px 10px;
`;
const AppBoxStyle = styled.div`
  border: 2px solid #003458;
  border-radius: 10px;
  min-height: 800px;
  background-color: #eaeae3;
`;
function App() {
  return (
    <AppStyle>
      <AppBoxStyle>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/login" component={Login} />
          <Route path="/join" component={Join} />
          <Route path="/diary" component={DiaryHome} />
        </Switch>
      </AppBoxStyle>
      <Footer />
    </AppStyle>
  );
}

export default App;
