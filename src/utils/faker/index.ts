function timeout(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export async function sleep(fn: () => void) {
	await timeout(3000);
	return fn();
}
