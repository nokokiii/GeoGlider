<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { page } from '$app/state';

	const { pathname } = $state(page.url);
</script>

<nav class="fixed top-0 z-100 flex items-center justify-between p-4 backdrop-blur-md text-white px-40 py-5 w-full">
    <a data-sveltekit-preload-code href="/" class="flex flex-row items-center gap-2">
        <img src="worldwide.png" alt="" class="w-7" />
        <span class="text-2xl font-bold bg-gradient-to-r from-[#8BF3FF] to-[#1C51FF] bg-clip-text text-transparent">GeoGlider</span>
    </a>

    <div class="flex flex-row gap-8">
        <Button href="/flags" variant={pathname == "/flags" ? "ghostSelected" : "ghost"} class="gap-2 flex justify-center items-center">
            <img src="flag.svg" alt="" class="scale-75" />
            <p class="text-md font-semibold">Flags</p>
        </Button>
        <Button href="/capitols" variant={pathname == "/capitals" ? "ghostSelected" : "ghost"} class="gap-2 flex justify-center items-center">
            <img src="buildings.svg" alt="" class="scale-75" />
            <p class="text-md font-semibold">Capitals</p>
        </Button>
        <Button href="/scoreboard" variant={pathname == "/scoreboard" ? "ghostSelected" : "ghost"} class="gap-2 flex justify-center items-center">
            <img src="scoreboard.svg" alt="" class="scale-75" />
            <p class="text-md font-semibold">Scoreboard</p>
        </Button>
    </div>
</nav>