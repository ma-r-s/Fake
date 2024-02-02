<script>
	import { mostVotedStore, fakeArtistStore } from '$lib/stores.js';
</script>

<div class="flex min-h-screen flex-col items-center justify-center gap-4">
	{#if $mostVotedStore == $fakeArtistStore}
		<p class="text-center text-4xl font-bold">Player {$mostVotedStore + 1} was the fake artist!!</p>
		<p class="text-center text-3xl">The fake artist has one last chance to guess the object</p>
	{:else}
		<p class="text-center text-4xl font-bold">
			Player {$mostVotedStore + 1} was NOT the fake artist!!
		</p>
		<p class="text-center text-3xl">The fake artist was Player {$fakeArtistStore + 1}</p>
		<p class="text-center text-3xl">Well played</p>
	{/if}
	<a class="text btn btn-primary btn-lg text-2xl" href="./">Play Again</a>
</div>
