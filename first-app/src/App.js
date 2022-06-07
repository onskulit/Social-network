import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import MyProfileContainer from './components/MyProfile/MyProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper__content">
        <Routes>
          <Route path='/myProfile' element={ <MyProfileContainer /> } />
          <Route path='/dialogs/*' element={ <DialogsContainer /> } />
          <Route path='/users/*' element={ <UsersContainer /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
