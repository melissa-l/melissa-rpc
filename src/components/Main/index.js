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
	handleOnKeyDown = () => {
		console.log(this);
	}

	render () {
		return (
			<div onClick={this.handleOnKeyDown()}>
				<canvas id="canvas" width="200" height="200">
				32
				</canvas>
				Main32324
			</div>
		);
	}
}
