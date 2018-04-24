import { COLLECT_PHONE } from "./constant";

export function collectPhone(listPhone) {
	return {
		type: COLLECT_PHONE,
		payload: listPhone,
	}
}