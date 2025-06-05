<script lang="ts">
    import Logo from "$lib/assets/worldwide.png";
    
    import { Button } from "$lib/components/ui/button/index.js";
    import Nav from "$lib/components/ui/Header.svelte";
</script>

<Nav />

<main class="min-full flex flex-row justify-center items-center gap-24 h-screen">
    <div class="text-white text-left flex flex-col gap-12">
        <div class="flex flex-col gap-4">
            <h1 class="text-6xl font-bold leading-18">
                Ready to master every <br/> <span class="bg-gradient-to-r from-[#8BF3FF] to-[#1C51FF] bg-clip-text text-transparent"> capital, country, and flag </span> <br/> on Earth? 
            </h1>
            <p class="text-xl opacity-75 w-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. </p>
        </div>
        <div>
            <Button data-sveltekit-preload-data href="/flags" variant="gradient">Start learning →</Button>
        </div>
    </div>

    <div class="relative w-96">
        <div class="absolute w-full inset-0 rounded-full shadow-[0px_0px_100px_15px_rgba(28,81,255,0.3)] scale-90 z-0"></div>

        <img src={Logo} alt="Earth" class="relative w-full h-full rounded-full z-10" />
    </div>
</main>
