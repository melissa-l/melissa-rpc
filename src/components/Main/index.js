import React from 'react';
import './index.scss';
// import bg from "../../images/yoman.png";
import bg from "../../images/32.png";
// const bg = {
//   height: '50%',
//   color: 'red',
//   background: `url${require("../images/yoman.jpg")}`,
// };

export default class Main extends React.Component {


	render () {
		return (
			<div>
				<img src={bg}/>
				Main
			</div>
		);
	}
}
