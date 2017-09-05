import React from 'react';
import './index.scss';

const NAXT_DATA = [
   [0, 0, 0 ,0],
   [0, 0, 0 ,0],
   [0, 0, 0 ,0],
   [0, 0, 0 ,0],  
];

const GAME_DATA = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
//方块数据 
const data = [
	   [0, 0, 2, 0],
	   [0, 0, 2, 0],
	   [0, 0, 2, 0],
	   [0, 0, 2, 0]
	];
//原点
const origin ={
	x: 0,
	y: 0
}
export class Square extends React.Component {
	state = {
		date: data,
		origin: origin,
	}
	canDown = (isVaild) => {
		var test = {};
		test.x = this.origin.x + 1;
		test.y = this.origin.y;
		// console.log(test.x)
		return isVaild(test, this.data);
	}
	down = () => {
		this.origin.x = this.origin.x +1;
	}
}

const gameDivs = [];

const nextDivs = [];
export default class Tetris extends React.Component {
	state = {
		doms: {}
	}

    componentDidMount() {
    	const state = this.state;
    	const doms = this.state.doms
    	doms.gameDiv = this.refs.game;
    	doms.nextDiv = this.refs.next;
    	this.setState({ doms },()=>{
    		this.init(state.doms);
    	})
    }
    //绑定键盘事件
	bindKeyEvent = () => {
		document.onkeydown = function(e) {
			if(e.keyCode == 38) {//up
				// game.up();
				// console.log("上", 38);
			} else if(e.keyCode == 39) {//right
				// game.right();
				// console.log("右", 39)
			} else if(e.keyCode == 40) {//down
				// console.log("下", 40)
				this.down();
			} else if(e.keyCode == 37) {//left
				// console.log("左", 37)
				// game.left();
			} else if(e.keyCode == 32) {//space
				// console.log("空格", 32)
				// game.change();
			}
		}
	}
    //初始化
	init = (doms) => {
		const state = this.state;
		const domItems = state.doms;
		const gameDiv = domItems.gameDiv;
		const nextDiv = domItems.nextDiv;
		// gameDiv = doms.gameDiv;
		// nextDiv = doms.nextDiv;
		const cur = new Square();
		const next = new Square();
		this.initDiv(gameDiv, GAME_DATA, gameDivs);
		this.initDiv(nextDiv, next.data, nextDivs);
		cur.origin.x = 10;
		cur.origin.y = 5;
		setData();
		this.refreshDiv(GAME_DATA, gameDivs);
		this.refreshDiv(next.data, nextDivs);
	}
	//初始化divthis.
	initDiv = (container, data, divs) => {
		console.log(data);
		for(var i = 0; i<data.length; i++) {
			var div= [];
			for(var j = 0; j<data[0].length; j++) {
				var newNode = document.createElement('div');
				newNode.className = 'none';
				newNode.style.top = (i*20) + 'px';
				newNode.style.left = (j*20) + 'px';
				container.appendChild(newNode);
				div.push(newNode);
			} 
			divs.push(div);
		}
	}
	//下移
	down = () => {
		if(cur.canDown(isValid)) {
			this.clearData();
			cur.down();
			setData();
			this.refreshDiv(GAME_DATA, gameDivs);
		}
	}
	//设置数据
	setData = () => {
		for(var i=0; i<cur.data.length; i++) {
			for(var j=0; j<cur.data[0].length; j++) {
				if(check(cur.origin, i, j)) {
					GAME_DATA[cur.origin.x + i][cur.origin.y + j] = cur.data[i][j];
				}
			}
		}
	}
	//检测数据是否合法
	isValid = (pos, data) => {
		for(var i=0; i<data.length; i++) {
			for(var j=0; j<data[0].length; i++) {
				// console.log(data[i][j]);
				if(data[i][j] != 0) {
					if(!check(pos, i, j)) {
						return false;
					}
				} else {
					return true;
				}
			}
		}
		return true;
	}
	//检查点是否合法
	check = (pos, x, y) => {
		if(pos.x + x <0) {
			return false;
		} else if(pos.x + x >= GAME_DATA.length) {
			return false;
		} else if(pos.y + y < 0) {
			return false
		} else if(pos.y + y >= GAME_DATA[0].length) {
			return false;
		} else if(GAME_DATA[pos.x + x][pos.y + y] == 1) {
			return false;
		} else {
			return true;
		}
	}
	//刷新div
	refreshDiv = (data, divs) => {
		for(var i=0; i<data.length; i++) {
			for(var j=0; j<data[0].length; j++) {
				if(data[i][j] == 0) {
					divs[i][j].className = 'none';
				} else if(data[i][j] == 1) {
					divs[i][j].className = 'done';
				} else if(data[i][j] == 2) {
					divs[i][j].className = 'current';
				}
			}
		}
	}
	//清除数据
	clearData = () => {
		for(var i=0; i<cur.data.length; i++) {
			for(var j=0; j<cur.data[0].length; j++) {
				if(this.check(cur.origin, i, j)) {
					GAME_DATA[cur.origin.x + i][cur.origin.y + j] = 0;
				}
			}
		}		
	}

	render () {
		return (
			<div onKeyDown={this.bindKeyEvent()}>
			  <div className="header block">
			    <div>todo</div>
			  </div>
			  <div className="mainMsg">
			    <div className="firstAnswer block">
			      <div className="game" ref="game"></div>
			    </div>
			    <div className="footer block">
			      <div className="next" ref="next"></div>  
			      <div className="info">
			        <div>已用时:<span>0</span>s</div>
			        <div>已得分:<span>0</span>分</div>   
			      </div>
			    </div>
			  </div>
			</div>
		);
	}
}
