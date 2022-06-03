import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import MyProfile from './components/MyProfile/MyProfile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper__content">
          <Routes>
          <Route path='/myProfile' element={ <MyProfile profilePage={ props.store.state.profilePage } dispatch={ props.store.dispatch.bind(props.store) }/> } />
            <Route path='/dialogs/*' element={ <Dialogs persons={ props.store.state.persons }/> } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
