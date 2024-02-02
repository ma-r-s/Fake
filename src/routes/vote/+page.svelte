<script>
	import { canvasImageStore, playersStore, colors, mostVotedStore } from '$lib/stores.js';

	let currPlayer = 0;
	let votes = Array($playersStore).fill(0);
	let image = $canvasImageStore.toDataURL();

	const vote = (i) => {
		if (currPlayer < $playersStore) {
			votes[i]++;
			currPlayer++;
		}
		if (currPlayer == $playersStore) {
			mostVotedStore.set(votes.indexOf(Math.max(...votes)));
		}
	};
</script>

<div class="flex h-screen text-3xl font-bold">
	<div class="flex-col justify-center p-8">
		<p class=" m-8 text-center text-6xl">
			{#if currPlayer < $playersStore}
				Player {currPlayer + 1} vote
			{:else}
				Player votes
			{/if}
		</p>

		<div class="border-8 border-dashed border-black bg-white">
			<img src={image} alt="canvas" class="" />
		</div>
	</div>

	<div class="flex flex-col flex-wrap items-center justify-center gap-6 p-8">
		{#each Array($playersStore) as _, i}
			<div class="flex gap-2">
				<button
					class="btn btn-secondary btn-lg text-xl"
					on:click={() => {
						vote(i);
					}}
				>
					Player {i + 1}
				</button>
				<div
					class="flex w-14 items-center justify-center rounded-full text-center text-white"
					style={`background-color: ${$colors[i]};`}
				>
					{votes[i]}
				</div>
			</div>
		{/each}
	</div>
	<a
		href="./reveal"
		class={`btn btn-neutral btn-lg absolute left-10 top-10 text-2xl ${currPlayer == $playersStore ? '' : 'invisible'}`}
		>Reveal</a
	>
</div>
