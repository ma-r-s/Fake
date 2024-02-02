<script>
	import ArrowBackRounded from 'virtual:icons/material-symbols/arrow-back-rounded';
	import { onMount } from 'svelte';
	import { selectedObjectStore } from '$lib/stores.js';

	let topics = [];

	onMount(() => {
		import('./topics.js').then((module) => {
			topics = module.default;
		});
	});
</script>

<div class="flex h-screen flex-col">
	<button on:click={() => history.back()} class="absolute left-8 top-8 flex items-center gap-2">
		<ArrowBackRounded class="h-8 w-8" />
		<p class="text-2xl">Back</p>
	</button>
	<div class="m-12 grid grow content-center gap-20 sm:grid-cols-3 md:grid-cols-4">
		{#each topics as topic}
			<a
				on:click={() => {
					//Set the selected topic to a random object from the topic
					selectedObjectStore.set(topic.objects[Math.floor(Math.random() * topic.objects.length)]);
				}}
				href="/show"
				class="btn btn-primary h-20 text-xl">{topic.name}</a
			>
		{/each}
	</div>
</div>
