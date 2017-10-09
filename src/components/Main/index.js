import React from 'react';
import './index.scss';
// import bg from "../../images/yoman.png";
import bg from "../../images/32.png";

export default class Main extends React.Component {
	state = {
		length: 12,
		width: 18,
		imgs: [],
	}
	componentWillMount () {
	  const state = this.state;   
	  const imgs = state.imgs;
      fetch('/img/timg.jpeg')
      .then(res => {
      	this.setState({ img: res})
      })
      .catch(err => {
        // this.state.listMsg = errorMsg(err && err.extra || err);
        // this.returnDefaultView();
        throw err;
      });
      for (let i = 1; i<10; i++) {
	    fetch(`/img/${i}.jpg`)
	    .then(res => {
	    	imgs[`${i-1}`] = res;
	    })
      }
      this.setState({ imgs })
	}
	componentDidMount () {
		this.setState({length: "did"},()=>{
			// console.log(this.state.length,"did");
		});
	}
	componentDidUpdate () {
		// console.log("didupdate");
	}
	componentWillReceiveProps () {
		// console.log('componentWillReceiveProps')
	}

	handleOnKeyDown = () => {
		// console.log(this,"handleOnKeyDown");
	}

	render () {
		const {
			length,
			img,
			imgs
		} = this.state;
		return (
			<div onClick={this.handleOnKeyDown()}>
				{
					img 
					? <img src={`${img.url}`} />
					: null
				}
				{length}
				Main32324
				<section className="imgs">
					{
						imgs && imgs.map((item, index) => {
							return (
									<img 
										key={index}
										src={`${item.url}`}
									/>
								)
						})
					}
				</section>
			</div>
		);
	}
}
