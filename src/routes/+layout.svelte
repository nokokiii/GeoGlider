<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/ui/Header.svelte';
	import Footer from '$lib/components/ui/Footer.svelte';

	let { children } = $props();
</script>

<section class="selection:bg-[#8BF3FF]/10 min-screen bg-[#0f0f0f]">
	<Header />

	<div class="relative z-10">
		{@render children()}
	</div>

	<Footer />
</section>
