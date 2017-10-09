import React from 'react';
import './index.scss';

export default class EchartsComponent extends React.Component {
  state = {
    data: [1,1,1,1,1,1,1,1,1],
  }
  componentDidMount() {
  }
  render () {
    const data = this.state.data;
    return (
      <section>
          <p className="cursor-p"></p>
          <div className="flex-container">
          <div className="unit">
            <div className="heart">
            {
              data.map((item, i) => {
                return (
                  <div 
                    className={`heart-piece heart-piece-${i+1}`}
                    key={i}
                    ></div>
                  )
              })
            }
            </div>
            <p>love yico</p>
          </div>
          <div className="border-box"></div>
        </div>
      </section>
      
    )
  }
}
