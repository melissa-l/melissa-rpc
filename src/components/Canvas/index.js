import React from 'react';
import './index.scss';
// import ReactCanvas from 'react-canvas';
var ReactCanvas = require('react-canvas');
import fs from 'fs';

export default class CanvasBg extends React.Component {
  state = {
    date: '',
    stories: [],
    top_stories: [],
  }

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
