import { WAIT_URL } from '$lib/constants';
import { PLAYERS_URL} from '$lib/constants'

export async function load() {
	let players = {};
	let wait = {};
	const res1 = await fetch(WAIT_URL);
	if (!res1.ok) {
		wait = {};
	}else{
		wait = await res1.json();
	}
	const res2 = await fetch(PLAYERS_URL);
	if (!res2.ok) {
		players =  {};
	}else{
		players = await res2.json();
	}
	return { wait, players };
}
