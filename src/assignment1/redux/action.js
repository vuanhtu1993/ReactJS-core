import { LIST_PHONE } from "./constant";

export function listPhone(listPhone) {
	console.log(listPhone);
	return {
		type: LIST_PHONE,
		payload: listPhone,
	}
}