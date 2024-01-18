import { WAIT_URL } from '$lib/constants';

export async function load() {
	const res = await fetch(WAIT_URL);
	if (!res.ok) return {};
	const item = await res.json();
	return { item };
}
