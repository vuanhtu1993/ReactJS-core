import { COLLECT_PHONE } from "./constant";

export default function phoneReducer(state = [], action) {
	console.log(action.type);
	switch (action.type) {
		case COLLECT_PHONE: {
			state = action.payload;
			return state;
		}
		default: return state;
	}
};