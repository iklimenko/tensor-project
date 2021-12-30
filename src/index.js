import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StudentsList from './pages/StudentsList'
import Popup from './pages/Popup';

ReactDOM.render(
  <React.StrictMode>
    <Popup />
    {/* <StudentsList /> */}
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
