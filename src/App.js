import logo from './logo.svg';
import './App.css';
import Nav from "./Nav";
// import { Button } from 'antd';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from "./About";
import Todos from "./Todos";
import Contact from "./Contact";
import Dog from "./Dog";
import React, {useState, useEffect, useContext} from 'react';
import Django from "./django";

function App() {



  return (
      <Router>
          <Nav />

          {/*<Dog />*/}



          <Switch>
              <Route path="/about">
                  <About />
              </Route>
              <Route path="/todos">
                  <Todos />
              </Route>
              <Route path="/contact">
                  <Contact />
              </Route>
              <Route path="/django">
                  <Django />
              </Route>
          </Switch>



      </Router>
  );
}

export default App;



// <div className="App">
//
//     <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//             Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//         >
//             Learn React
//         </a>
//     </header>
// </div>
