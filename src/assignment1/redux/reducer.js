import { LIST_PHONE } from "./constant";

export default function phoneReducer(state = [], action) {
	console.log(action.type);
	switch (action.type) {
		case LIST_PHONE: {
			state = action.payload;
			return state;
		}
		default: return state;
	}
};