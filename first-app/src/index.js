import reportWebVitals from './reportWebVitals';
import state from './state';
import { addPost, subscribe } from './state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const rerenderEntireTree = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App state={ state } addPost={ addPost } />
    </React.StrictMode>
  );
};

rerenderEntireTree();

subscribe(rerenderEntireTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
