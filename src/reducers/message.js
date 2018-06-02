var data = [
	{
		username: 'Nino',
		message: 'Hello world...'
	}
]

const messages = (state = data, action) => {
	switch (action.type) {
		case 'ADD_MESSAGE':
			return [
				...state,
				action.message
			]
	    default:
	      return state
  	}
}

export default messages