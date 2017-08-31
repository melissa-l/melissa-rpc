import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Main from './Main/index.js';
import List from "./List/index.js";
import Detail from "./Detail/index.js";
// import Canvas from './Canvas/index.js';
// import { Router, Route, hashHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

export class App extends React.Component{
  state = {
    tabIndex: 0,
  }
  handleChangeTab = (e) => {
    const tabIndex = parseInt(e.target.parentNode.getAttribute('data-index'), 10);
    if ((tabIndex || tabIndex === 0) && tabIndex !== this.state.tabIndex) {
      this.setState({ tabIndex });
    }
  }
  render () {
    const state = this.state;
    return (
     <Router>
      <div className="app-main">
        <ul className="app-nav" onClick={this.handleChangeTab}>
          <li className={`${state.tabIndex === 0 ? 'active' : ''}`} data-index="0"><Link to="/">Home</Link></li>
          <li className={`${state.tabIndex === 1 ? 'active' : ''}`} data-index="1"><Link to="/list">List</Link></li>
          <li className={`${state.tabIndex === 2 ? 'active' : ''}`} data-index="2"><Link to="/detail">Detail</Link></li>
        </ul>
        <hr/> 
        <Route exact path="/" component={Main} />
        <Route path="/list" component={List} />
        <Route path="/detail" component={Detail} />
      </div>
    </Router>
    )
  }
}


//最终渲染
ReactDom.render((
    <App/>
), document.getElementById('app'));
