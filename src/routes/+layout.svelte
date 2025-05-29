<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<nav class="w-full h-12 border-b border-neutral-700 bg-neutral-800 px-20 fixed top-0 z-50">
	<div class="container h-full mx-auto flex justify-start items-center gap-10">
		<a href="/" class="text-white text-sm font-semibold">Flags</a>
		<a href="/flags" class="text-white text-sm font-light">Learn Flags</a>
		<a href="/capitals" class="text-white text-sm font-light">Learn Capitals</a>
	</div>
</nav>

<section class="flex flex-col items-center justify-center min-h-screen bg-neutral-900">
	{@render children()}
</section>
