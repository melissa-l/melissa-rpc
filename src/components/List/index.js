 import React from 'react';
import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();
import './index.scss';
import 'babel-polyfill';

export default class List extends React.Component {
  state = {
    date: '',
    top_stories: [],
  }
  componentDidMount(){
    const state = this.state;   
    // if (!state.stories) {
      fetch('/list/api/4/news/before/20131119')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          date: res.date,
          stories: res.stories,
        });
      })
      .catch(err => {
        // this.state.listMsg = errorMsg(err && err.extra || err);
        // this.returnDefaultView();
        throw err;
      });
    // }
  }
  render () {
    const state = this.state;
    return (
      <div>
        <div className='block'>
          <div className = "mainInput">
            {
             state.stories && state.stories.map(item => {
               return (
                 <div key = {item.id} className = 'newsItem'>
                   <div>{item.title}</div>
                 </div>
               )
             })
           }
          </div>
        </div>
      </div>
    )
  }
}
