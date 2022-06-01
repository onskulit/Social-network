import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import MyProfile from './components/MyProfile/MyProfile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper__content">
          <Routes>
            <Route path='/dialogs' element={ <Dialogs /> } />
            <Route path='/myProfile' element={ <MyProfile /> } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
