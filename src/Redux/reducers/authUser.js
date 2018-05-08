const initialState = {
	user: {},
	isAuth: false,
	profile: {},
	token: ''
};
const authUserReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				isAuth: Object.keys(action.user).length > 0 ? true : false,
				user: action.user,
				token: JSON.parse(localStorage.Auth).user.token,
			};
		case 'FOLLOW_USER':
			let user = Object.assign({}, state.user)
			user.following.push(action.user_id)
			return {
				...state,
				user: user
			};
		case 'SET_PROFILE':
			return {
				...state,
				profile: action.profile
			};
		default:
			return state;
	}
};

export default authUserReducer;