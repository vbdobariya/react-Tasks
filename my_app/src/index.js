import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Task from './Task-1';
import Language from './chackbox';
import Radio from './radio';
import Uniquevalue from './uniquevalue';
import Oddeven from './oddeven';
import OrderBySum from './sumArr';
import Anagram from './maryArmy';
import Pair from './pair';
import Alphabet from './alphabet';
import SortTheArray from './sortTheArray';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Pair/> */}
    {/* <Task /> */}
    {/* <Language/> */}
    {/* <Radio /> */}
    {/* <Uniquevalue/> */}
    {/* <Oddeven/> */}
    {/* <OrderBySum/> */}
    {/* <Anagram/> */}
    <Alphabet/>
    {/* <SortTheArray/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
