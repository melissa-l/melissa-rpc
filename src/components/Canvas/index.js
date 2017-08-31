
import React from 'react';
import './index.scss';
// import ReactCanvas from 'react-canvas';
var ReactCanvas = require('react-canvas');
import fs from 'fs';

// var Surface = ReactCanvas.Surface;
// var Image = ReactCanvas.Image;
// var Text = ReactCanvas.Text;

export default class CanvasBg extends React.Component {
  state = {
    date: '',
    stories: [],
    top_stories: [],
  }

  // getImageHeight = () => {
  //   return Math.round(window.innerHeight / 2);
  // }
  //
  // getImageStyle = () => {
  //   return {
  //     top: 0,
  //     left: 0,
  //     width: window.innerWidth,
  //     height: this.getImageHeight()
  //   };
  // }
  //
  // getTextStyle = () => {
  //   return {
  //     top: this.getImageHeight() + 10,
  //     left: 0,
  //     width: window.innerWidth,
  //     height: 20,
  //     lineHeight: 20,
  //     fontSize: 12
  //   }
  // }
  render () {
    const date = this.state.date;
    const stories = this.state.stories;

    var surfaceWidth = window.innerWidth;
    var surfaceHeight = window.innerHeight;
    var imageStyle = this.getImageStyle();
    var textStyle = this.getTextStyle();
    return (
      <div>21</div>
    )
  }
}
