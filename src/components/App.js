import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Main from './Main/index.js';
import List from "./List/index.js";
import Detail from "./Detail/index.js";
import Tetris from "./Tetris/index.js";
import Echarts from './Echarts/index.js';
import Canvas from './Canvas/index.js';
import Love from './Love/index.js';
// import { Router, Route, hashHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

export function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min;
} 

export class App extends React.Component{
  state = {
    tabIndex: 0,
    mousePos: {},
    style: {},
  }

  componentWillMount () {
    const mousePos = this.state.mousePos;
    let style = this.state.style;
    
    var draw = setInterval(function(){
      if(mousePos.x > 0 && mousePos.y > 0){
        const range = 15;
        const sizeInt = getRandomInt(10, 30);
        // const color = "background: rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+");";
        // const size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
        // const left = "left: " + getRandomInt(mousePos.x-range-sizeInt, mousePos.x+range) + "px;";
        // const top = "top: " + getRandomInt(mousePos.y-range-sizeInt, mousePos.y+range) + "px;"; 

        style = {
          background: `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`,
          height: `${sizeInt}px`,
          width: `${sizeInt}px`,
          left:  `${getRandomInt(mousePos.x-range-sizeInt, mousePos.x+range)}px`,
          top:  `${getRandomInt(mousePos.y-range-sizeInt, mousePos.y+range)}px`,
        }
        // this.renderAnimationend(style);
        // $("<div class='ball' style='" + style + "'></div>")
        // .appendTo('#wrap')
        // .one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"
        //   , function(){$(this).remove();}); 
      }
    }, 1);
    this.setState({ style })
  }
  render

  renderAnimationend = () => {
    const style = this.state.style || {} ;
    console.log(2121);
    let result = (
        <div 
          id="wrap"
          style={{style}}
        >
          <p></p>
        </div>
      )
    return result;
  }

  handleMouseOver = (e) => {
    const mousePos = this.state.mousePos;
    mousePos.x = e.pageX;
    mousePos.y = e.pageY;  
    this.setState({ mousePos });
  }

  handleMouseOut = (e) => {
    const mousePos = this.state.mousePos;
    mousePos.x = -1;
    mousePos.y = -1;  
    this.setState({ mousePos });
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
      <div 
        className="app-main"
        onMouseMove={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        { this.renderAnimationend() }
        <ul className="app-nav" onClick={this.handleChangeTab}>
          <li className={`${state.tabIndex === 0 ? 'active' : ''}`} data-index="0"><Link to="/">Home</Link></li>
          <li className={`${state.tabIndex === 1 ? 'active' : ''}`} data-index="1"><Link to="/list">List</Link></li>
          <li className={`${state.tabIndex === 2 ? 'active' : ''}`} data-index="2"><Link to="/detail">Detail</Link></li>
          <li className={`${state.tabIndex === 3 ? 'active' : ''}`} data-index="3"><Link to="/echarts">Echarts</Link></li>
          <li className={`${state.tabIndex === 4 ? 'active' : ''}`} data-index="4"><Link to="/canvas">Canvas</Link></li>
          <li className={`${state.tabIndex === 5 ? 'active' : ''}`} data-index="5"><Link to="/love">Love</Link></li>
        </ul>
        <hr/> 
        <Route exact path="/" component={Main} />
        <Route path="/list" component={List} />
        <Route path="/detail" component={Detail} />
        <Route path="/echarts" component={Echarts} />
        <Route path="/canvas" component={Canvas} />
        <Route path="/love" component={Love} />
      </div>
    </Router>
    )
  }
}


//最终渲染
ReactDom.render((
    <App/>
), document.getElementById('app'));
