<script>
	import { mostVotedStore, fakeArtistStore } from '$lib/stores.js';
	import { canvasImageStore } from '$lib/stores.js';

	const image = $canvasImageStore.toDataURL();
</script>

<div class="flex min-h-screen flex-col items-center justify-center gap-4">
	<div class="border-8 border-dashed border-black bg-white">
		<img src={image} alt="canvas" class="h-2/3 w-2/3" />
	</div>
	{#if $mostVotedStore == $fakeArtistStore}
		<p class="text-center text-6xl font-bold">Player {$mostVotedStore + 1} was the fake artist!!</p>
		<p class="text-center text-4xl">The fake artist has one last chance to guess the object</p>
	{:else}
		<p class="text-center text-5xl font-bold">
			Player {$mostVotedStore + 1} was NOT the fake artist!!
		</p>
		<p class="text-center text-4xl">The fake artist was Player {$fakeArtistStore + 1}</p>
		<p class="text-center text-4xl">Well played</p>
	{/if}
	<a class="text btn btn-primary btn-lg text-4xl" href="./">Play Again</a>
</div>
