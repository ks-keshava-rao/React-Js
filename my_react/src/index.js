// const React = require('react');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Lifecycle from './Lifecycle'
// const name = 'keshav'
// const currentDate = new Date().toLocaleDateString();
// const currentTime = new Date().toLocaleTimeString();
// const ReactDOM = require('react-dom')
//this is converted into create.Reactelement by babbel
//react elements can also be given in an array 
//Reac.fragment shorter syntax - <> </>
// ReactDOM.render(
// <React.Fragment>
// <div>
//     <h1>This is {name} first application</h1>
//     <p>React application</p>
// </div>
//     <h1 contentEditable='true'>This is a fragmenent </h1>
//     <p>sub Fragment</p>
//     <p>Today's date is : {currentDate}  </p>
//     <p>currrent time is : {currentTime}  </p>
// </React.Fragment>,document.getElementById("root"));
// ReactDOM.render(
//     <>
//     <h1>My name is {name}</h1>
//     <img src='https://picsum.photos/200/300' alt='Random images'/>
//     </>
// )

ReactDOM.render(
    <>
        <App />
        {/* <Lifecycle/> */}
    </>
    ,document.getElementById('root')
)