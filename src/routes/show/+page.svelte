<script>
	import { onMount } from 'svelte';
	import Back from 'virtual:icons/material-symbols/arrow-back-rounded';
	import { selectedObjectStore, fakeArtistStore, playersStore } from '$lib/stores.js';
	let currPlayer = 0;
	let show = false;
	let selectedObject;
	let fakeArtist;
	let numPlayers;
	onMount(() => {
		selectedObjectStore.subscribe((value) => {
			selectedObject = value;
		});
		fakeArtistStore.subscribe((value) => {
			fakeArtist = value;
		});
		playersStore.subscribe((value) => {
			numPlayers = value;
		});
	});
</script>

<button on:click={() => history.back()} class="absolute left-8 top-8 flex items-center gap-2">
	<Back class="h-9 w-9" />
</button>
<div class="flex min-h-screen flex-col items-center justify-center">
	<p class="m-8 text-9xl font-bold">Player {currPlayer + 1}</p>

	{#if show}
		{#if currPlayer == fakeArtist}
			<p class="text-4xl">You are the FAKE artist!</p>
		{:else}
			<p class="text-4xl">You are a REAL artist!</p>
			<p class="text-4xl">Draw: {selectedObject}</p>
		{/if}
		{#if currPlayer < numPlayers - 1}
			<button
				on:click={() => {
					show = !show;
					currPlayer++;
				}}
				class="btn btn-secondary btn-lg m-8 text-4xl">Next player</button
			>
		{:else}
			<a href="/draw" class="btn btn-neutral btn-lg m-4 text-4xl">Start game!</a>
		{/if}
	{:else}
		<button
			on:click={() => {
				show = !show;
			}}
			class="btn btn-primary btn-lg m-8 h-10 text-4xl">Show me!</button
		>
	{/if}
</div>
