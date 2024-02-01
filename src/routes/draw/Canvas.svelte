<script>
	import { onMount } from 'svelte';

	export let width;
	export let height;
	export let color;
	export let background = '#fff';

	let canvas;
	let context;
	let isDrawing;
	let start;

	let t, l;
	onMount(() => {
		context = canvas.getContext('2d');
		handleSize();
	});

	const handleStart = ({ offsetX: x, offsetY: y }) => {
		context.strokeStyle = color;
		context.lineWidth = 20;
		context.lineCap = 'round'; // Set line cap to round
		context.lineJoin = 'round';
		isDrawing = true;
		start = { x, y };
	};

	const handleEnd = () => {
		isDrawing = false;
	};
	const handleMove = ({ offsetX: x1, offsetY: y1 }) => {
		if (!isDrawing) return;
		const { x, y } = start;
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(x1, y1);
		context.closePath();
		context.stroke();

		start = { x: x1, y: y1 };
	};

	const handleSize = () => {
		height = canvas.parentNode.clientHeight;
		width = canvas.parentNode.clientWidth;
		const { top, left } = canvas.getBoundingClientRect();
		t = top;
		l = left;
	};
</script>

<svelte:window on:resize={handleSize} />

<canvas
	{width}
	{height}
	style:background
	bind:this={canvas}
	on:mousedown={handleStart}
	on:touchstart={(e) => {
		const { clientX, clientY } = e.touches[0];
		handleStart({
			offsetX: clientX - l,
			offsetY: clientY - t
		});
	}}
	on:touchend={handleEnd}
	on:touchmove={(e) => {
		const { clientX, clientY } = e.touches[0];

		handleMove({
			offsetX: clientX - l,
			offsetY: clientY - t
		});
	}}
	on:mouseup={handleEnd}
	on:mouseleave={handleEnd}
	on:mousemove={handleMove}
/>
