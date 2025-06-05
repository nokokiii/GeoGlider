<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import Card from "$lib/components/ui/Card.svelte";
    import Nav from "$lib/components/ui/Nav.svelte";
    import {count} from "$lib/store";

    let showAnswer: boolean = false
    export let data: any;
    const countries = data.data[0];
    let countValue: number;

    const unsubscribe = count.subscribe((value) => {
        countValue = value;
    });

    function showAnswers() {
        showAnswer = true;
    }

	let showCounter = true;

	function hideCounter() {
		showCounter = !showCounter;
	}
</script>

{#if data.length != 0}
    <div
        class="fixed bottom-5 z-20 flex flex-row items-center justify-center gap-5 py-5 bg-accent/60 backdrop-blur-md border-2 rounded-xl w-82 shadow-lg transition-all duration-500 ease-in-out"
        style:right={showCounter ? '1.25rem' : '-17rem'}>
        <Button onclick={hideCounter} variant="ghost" class="absolute h-full my-4 left-0 font-bold">{showCounter ? ">" : "<"}</Button>
        <span class="text-white font-semibold text-2xl gap">{countValue}/{countries.length}</span>

        <Button onclick={showAnswers} variant="destructive" class={!showAnswer ? '' : 'hidden'}>
            <img class="w-4" src="flag.svg" alt="">
        </Button>
        <Button data-sveltekit-reload variant="ghostSelected" href="/flags" onclick={showAnswers} class={showAnswer ? '' : 'hidden'}>Reset</Button>
    </div>

    <main class="">   
        {#if data.length != 0}
            <div class="grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 pt-20 gap-y-10 gap-x-30 mb-20 p-5 md:p-10 lg:p-20">
                {#each countries as country}
                    <Card flag={country.flag} keys={country.keys} name={country.name} isAnswer={showAnswer} />
                {/each}
            </div>
        {/if}
    </main>
{/if}
