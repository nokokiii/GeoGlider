<script lang="ts">
    import { count } from "$lib/store";
    import Button from 'flowbite-svelte/Button.svelte';2

    export let flag: string;
    export let name: string;
    export let keys: string[];
    export let isAnswer: boolean = false;

    let answer: string = "";

    let displayInput: boolean = false;
    let displayAnswer: boolean = true;
    let displayCorrectAnswer: boolean = true;

    function increment() {
        count.update((n: number) => n + 1);
    }

    function handleInput() {
        if (keys.includes(answer.toLowerCase())) {
            displayInput = true;
            displayAnswer = false;
            increment();
        }
    }

    function showAnswer() {
        displayInput = true;
        displayCorrectAnswer = false;
    }

    $: if (isAnswer) {
        showAnswer();
    }
</script>

<div class="flex flex-col items-center">
    <div class="relative w-40 h-60">
        <div class="absolute w-full h-full flex items-center justify-center">
            <img src={flag} class="w-40">
        </div>
    </div>

    <div class="flex flex-col gap-y-10 justify-center items-center">
        <div class="flex items-center">
            <input bind:value={answer} class:hidden='{displayInput}' class="rounded-lg py-4 px-2 input text-black h-[3vh] flex self-center 2xl:w-[10vw] xl:w-[10vw] lg:w-[15vw] md:w-[20vw] sm:w-[25vw] w-[20rem]" type="text" placeholder="Type your answer..." on:keyup={handleInput}>
            <input class:hidden='{displayAnswer}' class="rounded-lg py-4 px-2 opacity-70 h-[3vh] flex self-center placeholder:text-white bg-warning-900 2xl:w-[10vw] xl:w-[10vw] lg:w-[15vw] md:w-[20vw] sm:w-[25vw] w-[20rem]" placeholder="{name}" disabled>
            <input class:hidden='{displayCorrectAnswer}' class="rounded-lg py-4 px-2 opacity-70 h-[3vh] flex self-center placeholder:text-white 2xl:w-[10vw] xl:w-[10vw] lg:w-[15vw] md:w-[20vw] sm:w-[25vw] w-[20rem]" placeholder="{name}" disabled>
        </div>
        
        <Button disabled='{displayInput}' onclick={showAnswer} color="blue" class="w-3/4">Pokaż odpowiedź</Button>
    </div>
</div>