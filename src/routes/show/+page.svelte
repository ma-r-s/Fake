<script>
	import { onMount } from 'svelte';
	import ArrowBackRounded from 'virtual:icons/material-symbols/arrow-back-rounded';
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
	<ArrowBackRounded class="h-8 w-8" />
	<p class="text-2xl">Back</p>
</button>
<div class="flex min-h-screen flex-col items-center justify-center">
	<p class="text-3xl font-bold">Player {currPlayer + 1}</p>

	{#if show}
		{#if currPlayer == fakeArtist}
			<p class="text-2xl">You are the FAKE artist!</p>
		{:else}
			<p class="text-2xl">You are a REAL artist!</p>
			<p class="text-2xl">Draw: {selectedObject}</p>
		{/if}
		{#if currPlayer < numPlayers - 1}
			<button
				on:click={() => {
					show = !show;
					currPlayer++;
				}}
				class="btn btn-secondary btn-lg m-4 text-2xl">Next player</button
			>
		{:else}
			<a href="/draw" class="btn btn-neutral btn-lg m-4 text-2xl">Start game!</a>
		{/if}
	{:else}
		<button
			on:click={() => {
				show = !show;
			}}
			class="btn btn-primary btn-lg m-4 text-2xl">Show me!</button
		>
	{/if}
</div>
