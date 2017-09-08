import {creatStore} from 'redux';
const store = creatStore(fn);

const state = store.getState();

const ADD_TODO = '添加todo';

// const action = [{
// 	type: 'ADD_TODO',
// 	payload: 'Learn Redux'
// }];

//action creator
addTodo = (text) => {
	return {
		type: ADD_TODO,
		text
	}
}
const action = addTode('Learn Redux');

store.dispatch({
	type: 'ADD_TODO',
	payload: 'Learn Redux'
})