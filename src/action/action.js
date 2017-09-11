const addTode = (text) => {
	return {
		type: 'ADD_TODE',
		id: nextId++,
		text
	}
}