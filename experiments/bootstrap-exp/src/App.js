import React from 'react';
import './App.css';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import A from './pages/A';
import B from './pages/B';
import C from './pages/C';
import D from './pages/D';

const Home = () => (
  <div>
    <h2>{''+typeof($)}</h2>
  </div>
)

class BasicExample extends React.Component {
  render() {
    return <Router>
      <div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/a">A</Link></li>
          <li><Link to="/b">B</Link></li>
          <li><Link to="/c">C</Link></li>
          <li><Link to="/d">D</Link></li>
        </ul>
        <hr/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/a" component={A}/>
        <Route exact path="/b" component={B}/>
        <Route exact path="/c" component={C}/>
        <Route exact path="/d" component={D}/>
      </div>
    </Router>
  }
}

export default BasicExample