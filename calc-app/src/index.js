import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Title from './Title';
import Output from './Display';
import Buttons from './Buttons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const mytable = ReactDOM.createRoot(document.getElementById('table'));
mytable.render(<Buttons />)
//Title.render(<Title />)
//Output.render(<Output/>)
//Buttons.render(<Buttons />)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
