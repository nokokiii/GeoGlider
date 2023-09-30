<script lang="ts">
    import FlagCard from "$lib/Components/FlagCard.svelte";
    import countries_list from "$lib/countries.json";
    import { count } from "$lib/store";

    let showAnswer: boolean = false;
    let Countries: any = countries_list;
  
    count.set(0);
    let countValue: any;

    const unsubscribe = count.subscribe((value) => {
        countValue = value;
    });

    function shuffleArray(arr: any) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
  
    function showAnswers() {
        showAnswer = true;
    }
  
    shuffleArray(Countries);
  </script>
  
  <div class="flex justify-center w-full mb-5 mt-10">
      <button on:click={showAnswers} class:hidden={showAnswer} class="flex variant-ghost-primary items-center p-3 rounded-lg hover:scale-105 duration-150 active:scale-100">Pokaż wszystkie odpowiedzi</button>
      <a data-sveltekit-reload href="/flags" on:click={showAnswers} class:hidden={!showAnswer} class="flex variant-ghost-primary items-center p-3 rounded-lg hover:scale-105 duration-150 active:scale-100">Reset</a>
  </div>

  <div class="flex justify-center w-full">
    <span class="text-2xl font-bold drop-shadow-xl">Odgadełeś {countValue} państ</span>
  </div>
  
  <div class="grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  pt-20 gap-y-10 mb-20">
    {#each Countries as country}
      <FlagCard country={country} isAnswer={showAnswer} />
    {/each}
  </div>
  