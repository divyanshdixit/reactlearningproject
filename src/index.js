import React from 'react'; // use html element
import ReactDOM from 'react-dom'; // dom manupulation
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render( //
  <>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);
