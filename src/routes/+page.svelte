<script>
	import { playersStore, fakeArtistStore } from '$lib/stores.js';
	import logo from '$lib/assets/logo.svg';
	import Less from '~icons/ic/round-less-than';
	import Greater from '~icons/ic/round-greater-than';
	const maxPLayers = 15;
	const minPlayers = 3;
	let players = 3;

	const createGame = () => {
		fakeArtistStore.set(Math.floor(Math.random() * players));
		playersStore.set(players);
	};
</script>

<div class="flex h-screen flex-col items-center justify-center border">
	<img class="h-1/2" alt="The project logo" src={logo} />
	<div class="mb-6 flex items-center gap-4">
		<button
			class={`btn btn-secondary px-2 ${players == minPlayers ? 'invisible' : ''}`}
			on:click={() => players--}
		>
			<Less class="h-9 w-9" />
		</button>
		<p class="w-44 text-center text-4xl">
			{players} Players
		</p>
		<button
			class={`btn btn-secondary px-2 ${players == maxPLayers ? 'invisible' : ''}`}
			on:click={() => players++}
		>
			<Greater class="h-9 w-9" />
		</button>
	</div>
	<a href="/topics" on:click={createGame} class="btn btn-primary btn-lg text-4xl">Play</a>
</div>
