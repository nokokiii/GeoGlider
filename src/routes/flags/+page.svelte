<script lang="ts">
    import Loading from "$lib/components/ui/Loading.svelte";
    import Clock from "$lib/assets/clock.svg";
    import { Button } from "$lib/components/ui/button/index.js";
    import Card from "$lib/components/ui/Card.svelte";
    import { count } from "$lib/store";
    import { onDestroy } from "svelte";

    export let data;

    $: finish = false;
    $: showCounter = true;
    $: countValue = 0;

    const unsubscribe = count.subscribe((value) => {
        countValue = value;
    });


    function endGame() {
        finish = true;
    }

	function hideCounter() {
		showCounter = !showCounter;
	}

    let seconds: number = 3600;
    const interval = setInterval(() => {
        seconds--;
        if (seconds <= 0) {
            clearInterval(interval);
            finish = true;
        }
    }, 1000);

    onDestroy(() => {
        clearInterval(interval);
        unsubscribe();
    });

    function formatTime(seconds: number): string {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        
        const hoursStr = hours > 0 ? `${hours}h ` : '';
        const minutesStr = minutes > 0 ? `${minutes % 60}m ` : '';
        const secondsStr = secs < 10 ? `0${secs}s` : `${secs}s`;
        return `${hoursStr}${minutesStr}${secondsStr}`.trim();
    }

    $: formattedTime = formatTime(seconds);
</script>

{#await data.streamed.countries}
    <main class="flex flex-col items-center justify-center min-h-screen">
        <Loading />
    </main>
{:then countries}
    <main class="relative grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 pt-16 gap-y-10 gap-x-30 mb-20 p-5 md:p-10 lg:p-20">
        <div
            class="fixed bottom-5 z-20 grid [grid-template-columns:auto_1fr] grid-rows-2 pl-14 py-5 gap-y-4 gap-x-6 text-white text-xl font-semibold text-left bg-[#0F0F0F]/80 backdrop-blur-md border-2 rounded-xl w-72 shadow-lg transition-all duration-500 ease-in-out"
            style:right={showCounter ? '-1rem' : '-15.5rem'}>
            <Button onclick={hideCounter} variant="ghost" class="absolute h-full left-0 rounded-l-md rounded-r-none font-bold">{showCounter ? "|" : "|"}</Button>

            <div class="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32">
                    <path fill="#fff" d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4" />
                    <path fill="#fff" d="M20.59 22L15 16.41V7h2v8.58l5 5.01z" />
                </svg>
            </div>

            <p>{formattedTime}</p>
                
            <Button data-sveltekit-reload variant="ghostSelected" href="/flags" onclick={endGame} class={finish ? '' : 'hidden'}>Reset</Button>
            <Button onclick={endGame} variant="destructive" class={!finish ? 'w-[2em]' : 'hidden'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <path fill="#" d="M6 30H4V2h24l-5.8 9l5.8 9H6Z" />
                </svg>
            </Button>

            <p>{countValue} / {countries.length}</p>
        </div>

        {#each countries as country}
            <Card flag={country.flag} keys={country.keys} name={country.name} isAnswer={finish} />
        {/each}
    </main>
{:catch}
    <main class="flex flex-col items-center justify-center min-h-screen">
        <h1 class="text-3xl text-white">No flags found.</h1>
        <p class="text-gray-400">Please try again later.</p>
    </main>
{/await}


<svelte:head>
    {#await data.streamed.countries}
        <title>GeoGlider - Loading Flags...</title>
    {:then countries}
        <title>GeoGlider - Flags {countValue}/{countries.length}</title>
    {:catch}
        <title>GeoGlider - Error Loading Flags</title>
    {/await}
</svelte:head>