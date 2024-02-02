<script>
	import { canvasImageStore, playersStore, colors } from '$lib/stores.js';
	import DrawCanvas from './Canvas.svelte';
	let color = $colors[0];
	let currPlayer = 0;
	let canvas;
	const nextPlayer = () => {
		currPlayer++;
		if (currPlayer < $playersStore) {
			color = $colors[currPlayer];
		} else {
			firstRound = false;
			currPlayer = 0;
			color = $colors[currPlayer];
		}
	};
	let firstRound = true;
	const save = () => {
		canvasImageStore.set(canvas);
	};
</script>

<div class="flex min-h-screen flex-col items-center justify-center">
	<div class="mt-6 flex w-full items-center justify-around">
		<p class="text-2xl font-bold">Player {currPlayer + 1}</p>
		{#if currPlayer < $playersStore - 1}
			<button class="btn-large btn btn-neutral text-2xl" on:click={nextPlayer}>Next Player</button>
		{:else if firstRound}
			<button class="btn-large btn btn-primary text-2xl" on:click={nextPlayer}>Next Round</button>
		{:else}
			<a class="btn-large btn btn-secondary text-2xl" on:click={save} href="./vote">Vote</a>
		{/if}
	</div>
	<div class="m-6 w-11/12 grow border-8 border-dashed border-black">
		<DrawCanvas {color} bind:canvas />
	</div>
</div>
