<script lang="ts">
    import Logo from "$lib/assets/worldwide.png";
    import NavbarButton from './navbar/NavbarButton.svelte';

    import { Button } from '$lib/components/ui/button/index.js';

    let y: number;
    $: scrolled = y > 50;
</script>

<header class="fixed top-0 z-100 flex items-center justify-between p-4 bg-[#0F0F0F]/80 backdrop-blur-2xl px-20 py-5 w-full transition-all duration-200 {scrolled ? 'border-b' : ''}">
    <a data-sveltekit-reload href="/" class="flex flex-row items-center gap-4">
        <img src={Logo} alt="" class="w-7" />
        <span class="text-2xl font-bold bg-gradient-to-r from-[#8BF3FF] to-[#1C51FF] bg-clip-text text-transparent">GeoGlider</span>
    </a>

    <nav class="flex flex-row gap-8">
        <NavbarButton href="/flags" label="Flags" />
        <NavbarButton href="/capitals" label="Capitals" />
        <NavbarButton href="/scoreboard" label="Scoreboard" />
    </nav>

    <Button variant="ghost" size="sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path d="M16 28h-3c-3.9 0-7-3.1-7-7v-4h2v4c0 2.8 2.2 5 5 5h3zm12 2h2.2l-4.6-11h-2.2l-4.6 11H21l.8-2h5.3zm-5.3-4l1.8-4.4l1.8 4.4zM28 15h-2v-4c0-2.8-2.2-5-5-5h-4V4h4c3.9 0 7 3.1 7 7zM14 5V3H9V1H7v2H2v2h8.2c-.2.9-.8 2.5-2.2 4c-.6-.7-1.1-1.4-1.4-2H4.3c.4 1 1.1 2.2 2.1 3.3c-.8.7-2 1.3-3.4 1.8l.7 1.9c1.8-.7 3.2-1.5 4.3-2.3c1.1.9 2.5 1.7 4.3 2.3l.7-1.9c-1.4-.5-2.6-1.2-3.5-1.8c1.9-2 2.5-4.1 2.7-5.3z"/>
        </svg>
    </Button>
</header>

<svelte:window bind:scrollY={y} />
