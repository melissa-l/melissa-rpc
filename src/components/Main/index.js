import React from 'react';
import './index.scss';
// import bg from "../../images/yoman.png";
import bg from "../../images/32.png";
// const bg = {
//   height: '50%',
//   color: 'red',
//   background: `url${require("../images/yoman.jpg")}`,
// };
const aa = 1871603;
export default class Main extends React.Component {
	state = {
		length: 12,
		width: 18
	}
	componentWillMount () {
		console.log(this.state.length)
		this.setState({length: "will"},()=>{
			console.log(this.state.length,"will",1);
		});
	}
	componentDidMount () {
		console.log(this.state.length);
		this.setState({length: "did"},()=>{
			console.log(this.state.length,"did");
		});
	}
	componentDidUpdate () {
		console.log("didupdate");
	}
	componentWillReceiveProps () {
		console.log('componentWillReceiveProps')
	}

	handleOnKeyDown = () => {
		console.log(this,"handleOnKeyDown");
	}

	render () {
		const state = this.state;
		return (
			<div onClick={this.handleOnKeyDown()}>
				<canvas id="canvas" width="200" height="200">
				32
				</canvas>
				{state.length}
				Main32324
			</div>
		);
	}
}
