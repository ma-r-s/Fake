import { writable } from 'svelte/store';

export const playersStore = writable(5);
export const fakeArtistStore = writable(0);
export const selectedObjectStore = writable('');
export const mostVotedStore = writable(0);
export const colors = writable([
	'#FF0000', //red
	'#2222FF', //blue
	'#55EE66', //green
	'#FF9900', //orange
	'#A000A0', //purple
	'#00FFFF', //light blue
	'#008000', //dark green
	'#FF00FF', //pink
	'#FFEE33', //yellow
	'#A52A2A' //brown
]);
