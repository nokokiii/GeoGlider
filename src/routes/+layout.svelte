<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/ui/Nav.svelte';

	let { children } = $props();
</script>

<section class="selection:bg-[#8BF3FF7] selection:opacity-50 relative bg-[url('starts.jpg')] min-h-screen bg-cover bg-center after:content-[''] after:absolute after:inset-0 after:bg-[#131313] after:opacity-95">
	<Nav />

	<div class="relative z-10">
		{@render children()}
	</div>
</section>
