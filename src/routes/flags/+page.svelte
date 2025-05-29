<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import { count } from "$lib/store";
    import Button from 'flowbite-svelte/Button.svelte';

    let showAnswer: boolean = false;

    count.set(0);
    let countValue: any;

    const unsubscribe = count.subscribe((value) => {
        countValue = value;
    });

    export let data: any;
    const countries = data.data[0];

    console.log(countries);

    function showAnswers() {
        showAnswer = true;
    }
</script>

<div>
    <div class="flex items-center justify-center flex-row w-full gap-10 mt-20">
        <span class="text-2xl font-bold drop-shadow-xl text-white">Odgadełeś {countValue} państ</span>
    
        <Button onclick={showAnswers} class="{showAnswer ? 'hidden' : ''}" color="red">Koniec</Button>
        <Button data-sveltekit-reload href="/flags" onclick={showAnswers} class="{!showAnswer ? 'hidden' : ''}" color="red">Reset</Button>
    </div>
    
    
    {#if data.length != 0}
        <div class="grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 pt-20 gap-y-10 gap-x-30 mb-20">
            {#each countries as country}
                <Card flag={country.flag} keys={country.keys} name={country.name} isAnswer={showAnswer} />
            {/each}
        </div>
    {/if}
</div>