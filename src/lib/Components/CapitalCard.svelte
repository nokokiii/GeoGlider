<script lang="ts">
    import { count } from "$lib/store";

    export let country: any;
    export let isAnswer: boolean = false;

    let answer: string = "";

    let displayInput: boolean = false;
    let displayAnswer: boolean = true;
    let displayCorrectAnswer: boolean = true;

    function increment() {
		count.update((n) => n + 1);
	}

    function handleInput() {
        if (country.capital.toLowerCase() === answer.toLowerCase()) {
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
            <img src={country.flag} alt="Flaga {country.name}" class="w-40 drop-shadow-2xl">
        </div>
    </div>
    <div class="flex flex-col items-center">
        <span class="text-xl mb-5 font-bold drop-shadow-lg">{country.name}</span>
        <input bind:value={answer} class:hidden='{displayInput}' class="drop-shadow-2xl rounded-lg py-4 px-2 input text-black h-[3vh] flex self-center 2xl:w-[10vw] xl:w-[10vw] lg:w-[15vw] md:w-[20vw] sm:w-[25vw] w-[20rem]" type="text" placeholder="Type your answer..." on:keyup={handleInput}>
        <input class:hidden='{displayAnswer}' class="rounded-lg py-4 px-2 input-success text-black opacity-70 h-[3vh] flex self-center placeholder:text-black 2xl:w-[10vw] xl:w-[10vw] lg:w-[15vw] md:w-[20vw] sm:w-[25vw] w-[20rem]" placeholder="{country.capital}" disabled>
        <input class:hidden='{displayCorrectAnswer}' class="rounded-lg py-4 px-2 input-warning text-black opacity-70 h-[3vh] flex self-center placeholder:text-black 2xl:w-[10vw] xl:w-[10vw] lg:w-[15vw] md:w-[20vw] sm:w-[25vw] w-[20rem]" placeholder="{country.capital}" disabled>
    </div>
    <input type='button' disabled='{displayInput}' class="drop-shadow-2xl btn variant-ghost-primary rounded-lg btn-primary mt-3 mb-3" on:click={showAnswer} value="Pokaż odpowiedź" />
</div>
