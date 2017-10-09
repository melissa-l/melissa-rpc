import React from 'react';
import './index.scss';

export default class Canvas extends React.Component {
  state = {
    date: '',
    stories: [],
    top_stories: [],
  }
  componentDidMount () {
    var c = this.refs.mainCanvas;
    var ctx=c.getContext("2d");
    ctx.fillStyle="#e9ebc9";
    // ctx.fillRect(0,0,400,300);
    ctx.moveTo(0,0);
    ctx.lineTo(200,100);
    ctx.beginPath();
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.font="30px Arial";
    ctx.fillText("Hello World",10,50);
    ctx.stroke();
    console.log(c);
  }
  timedCount = () => {
    i=i+1;
    postMessage(i);
    setTimeout("timedCount()",500);
  }

  render () {
    const date = this.state.date;
    const stories = this.state.stories;
    return (
      <section className="section">
        <header className="header">
          <div className="content">
            我在居中（transform）
          </div>
        </header>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
           <polygon points="100,10 40,180 190,60 10,60 160,180"
         style={{fill:'lime',stroke:'purple'
         // ,stroke,width:'5',fill,rule:'evenodd'
       }}/>
        </svg>
        <section></section> 
        <canvas ref="mainCanvas" width="500" height="400" 
          style={{border:'1px solid #000000'}}>
        </canvas>
      </section>
    )
  }
}
