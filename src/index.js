import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

let chars = "%c Todo List App running 🚀";
let s = ["font-size: 12px", "font-family: monospace", "background: black", "display: inline-block", "color: yellow", "padding: 8px 19px", "border: 1px dashed yellow"].join(';')
console.log(chars, s);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
