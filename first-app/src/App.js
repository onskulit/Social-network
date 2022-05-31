import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import MyProfile from './components/MyProfile/MyProfile';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <MyProfile />
    </div>
  );
}

export default App;
