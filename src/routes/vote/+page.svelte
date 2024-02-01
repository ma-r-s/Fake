<script>
	import { playersStore, colors, mostVotedStore } from '$lib/stores.js';
	let currPlayer = 0;
	let votes = Array($playersStore).fill(0);
	const vote = (i) => {
		if (currPlayer < $playersStore) {
			votes[i]++;
			currPlayer++;
		}
		if (currPlayer == $playersStore) {
			mostVotedStore.set(votes.indexOf(Math.max(...votes)));
		}
	};
	const mostVoted = () => {};
</script>

<div class="flex min-h-screen flex-col items-center justify-evenly text-2xl font-bold">
	<p class="text-4xl">
		{#if currPlayer < $playersStore}
			Player
			{currPlayer + 1} vote
		{:else}
			Player votes
		{/if}
	</p>
	<div class="grid grid-cols-2 gap-x-10 gap-y-6">
		{#each Array($playersStore) as _, i}
			<div class="flex gap-4">
				<button
					class={`btn `}
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
	{#if currPlayer == $playersStore}
		<a
			href="./reveal"
			class="btn btn-primary"
			on:click={() => {
				mostVoted;
			}}>Reveal</a
		>
	{/if}
</div>
