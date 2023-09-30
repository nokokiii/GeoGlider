<script>
    export let country;
    export let flipped = false;
    let answer = "";

    let displayAnswer = "hidden";
    let displayInput = "flex";
    let buttonDisplay = "flex";

    function handleInput() {
        if (country.keys.includes(answer.toLowerCase())) {
            displayAnswer = "flex";
            displayInput = "hidden";
            buttonDisplay = "hidden";
        }
    }

    function flipCard() {
        flipped = !flipped;
    }
</script>

<div class="flex flex-col items-center">
    <div class="relative w-40 h-40">
        
        <div class="absolute w-full h-full flex items-center justify-center" class:hidden={flipped}>
            <img src={country.flag} alt="Flaga {country.name}" class="w-40">
        </div>
        <div class="absolute w-full h-full bg-white flex items-center justify-center" class:hidden={!flipped}>
            <p class="text-xl font-bold text-black">{country.name}</p>
        </div>
    </div>
    <button class="btn btn-primary mt-3 mb-3" on:click={flipCard}>Odwróć kartę</button>
    <div class="flex flex-col items-center">
        <input bind:value={answer} class="{displayInput} rounded-lg py-4 px-2 input text-black h-[3vh] flex self-center 2xl:w-[10vw] xl:w-[10vw] lg:w-[15vw] md:w-[20vw] sm:w-[25vw] w-[20rem]" type="text" placeholder="Type your answer..." on:keyup={handleInput}>
        <input class="{displayAnswer} rounded-lg py-4 px-2 input-success text-black opacity-70 h-[3vh] flex self-center placeholder:text-black 2xl:w-[10vw] xl:w-[10vw] lg:w-[15vw] md:w-[20vw] sm:w-[25vw] w-[20rem]" placeholder="{country.name}" disabled>
    </div>
</div>
