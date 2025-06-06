<script lang="ts">
    import { count } from "$lib/store";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';

    export let flag: string;
    export let name: string;
    export let keys: string[];
    export let isAnswer: boolean = false;

    let answer: string = "";
    let displayAnswer: boolean = false;
    let displayCorrectAnswer: boolean = false;

    function increment() {
        count.update((n: number) => n + 1);
    }

    function handleInput() {
        if (keys.includes(answer.toLowerCase())) {
            displayAnswer = true;
            answer = name;
            increment();
        }
    }

    function showAnswer() {
        displayCorrectAnswer = true;
    }

    $: if (isAnswer) {
        showAnswer();
    }

    let visible = false;

    onMount(() => {
        visible = true;
    });
</script>

{#if visible}
    <div class="flex flex-col items-center"
        transition:fly={{ y: 30, duration: 400 }}>
        
        <div class="relative w-40 h-60 flex items-center justify-center">
            <img src={flag} class="w-40" alt="Flag">
        </div>

        <div class="flex flex-col gap-y-4 justify-center items-center">
            <div class="flex items-center">
                <Input bind:value={answer} placeholder="Type your answer..." onkeyup={handleInput}
                    class="{!displayCorrectAnswer ? '' : 'hidden'} {displayAnswer ? 'bg-[#22bb33]/30' : ''}" 
                    disabled={displayAnswer} />
                <Input placeholder={name} class="bg-[#bb2124]/30 {displayCorrectAnswer ? '' : 'hidden'}" disabled />
            </div>
            
            <Button disabled={displayAnswer || displayCorrectAnswer} onclick={showAnswer} variant="outline">Show answer</Button>
        </div>
    </div>
{/if}
