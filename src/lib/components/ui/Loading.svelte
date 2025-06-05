<script lang="ts">
    import Loading from '$lib/assets/loading.svg';

	let dots = '.';
	const dotSequence = ['.', '..', '...', '..', '.'];
	let index = 0;

	const interval = setInterval(() => {
		dots = dotSequence[index];
		index = (index + 1) % dotSequence.length;
	}, 350);

	// Optional: Clear on component destroy
	import { onDestroy } from 'svelte';
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="flex flex-col items-center justify-center min-h-screen">
    <img src={Loading} alt="" class="w-30 h-30" />
    <p class="text-[#ABABAB] text-xl text-center mt-2 w-full">Loading{dots}</p>
</div>
