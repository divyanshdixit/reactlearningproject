import React from 'react'; // use html element
import ReactDOM from 'react-dom'; // dom manupulation
import './index.css';
import App from './App';
import FirstComponent from './firstComponent';
import reportWebVitals from './reportWebVitals';

const name = "Divyansh";
// let fname = "div";
// let lname = "Dixit";
const styleObj =  {
  color:'red',
  textTransform: 'capitalize'
}

if(false){
  var f = "something"
}else if(true){
  var f = "third";
}else{
  var f = "second"
}

const currentDate = new Date().toLocaleString();
ReactDOM.render( //
  <>
    <h1 style= {styleObj}> { `My name is ${name}`} </h1>
    <p> Date and time is {currentDate} </p>
    <p> Welcome {name},  {f} </p>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
