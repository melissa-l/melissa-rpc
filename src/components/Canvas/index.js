import React from 'react';
import './index.scss';

export default class Canvas extends React.Component {
  state = {
    date: '',
    stories: [],
    top_stories: [],
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
        <section className="quera">
          我要做一个正方形
        </section>
      </section>
    )
  }
}
