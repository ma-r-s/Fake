<script>
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
	import { playersStore, fakeArtistStore } from '$lib/stores.js';
	import Left from 'virtual:icons/material-symbols/arrow-back-rounded';
	import Right from 'virtual:icons/material-symbols/arrow-forward-rounded';
	import Down from '~icons/material-symbols/keyboard-arrow-down-rounded';
	const maxPLayers = 9;
	const minPlayers = 3;
	let players = 3;
	let themes = ['dim', 'retro', 'cyberpunk', 'valentine', 'aqua'];
	const createGame = () => {
		fakeArtistStore.set(Math.floor(Math.random() * players));
		playersStore.set(players);
	};
</script>

<div class="dropdown absolute left-8 top-8">
	<div tabindex="0" role="button" class="btn btn-lg m-1">
		Theme
		<Down></Down>
	</div>
	<ul tabindex="-1" class="dropdown-content z-[1] w-52 rounded-box bg-base-300 p-2 shadow-2xl">
		{#each themes as theme}
			<li>
				<input
					type="radio"
					name="theme-dropdown"
					class=" btn btn-ghost btn-block justify-start text-lg"
					aria-label={theme}
					value={theme}
					data-set-theme={theme}
				/>
			</li>
		{/each}
	</ul>
</div>

<div class="flex h-screen flex-col items-center justify-center">
	<p class="font-title mb-7 text-9xl">Fake Artist</p>
	<!-- <img class="h-1/2" alt="The project logo" src={logo} /> -->
	<div class="mb-6 flex items-center gap-4">
		<button
			class={`btn btn-secondary px-2 ${players == minPlayers ? 'invisible' : ''}`}
			on:click={() => players--}
		>
			<Left class="h-9 w-9" />
		</button>
		<p class="w-54 text-center text-4xl">
			{players} Players
		</p>
		<button
			class={`btn btn-secondary px-2 ${players == maxPLayers ? 'invisible' : ''}`}
			on:click={() => players++}
		>
			<Right class="h-9 w-9" />
		</button>
	</div>
	<a href="/topics" on:click={createGame} class="btn btn-primary btn-lg text-4xl">Play</a>
</div>
