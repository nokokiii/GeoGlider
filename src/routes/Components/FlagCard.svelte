<script>
  export let country;

  let answer = "";

  let displayAnswer = "hidden"
  let displayInput = "flex";
  let buttonDisplay = "flex";


  function handleInput() {
      if (country.keys.includes(answer.toLowerCase())) {
          displayAnswer = "flex";
          displayInput = "hidden";
          buttonDisplay = "hidden";
      }
  }
</script>

<div class="flex flex-col items-center">
  <div class="flex items-center justify-center h-40">
    <img src={country.flag} alt="There was a problem while loading a flag" class="mb-5 w-40"/>
  </div>
  <div class="flex flex-col items-center">
    <input bind:value={answer} class="{displayInput} text-black w-[10vw] h-[3vh] flex self-center px-2" type="text" placeholder="Type your answer..." on:keyup={handleInput} >
    <input class="{displayAnswer} text-black bg-success-500 w-[10vw] h-[3vh] flex self-center px-2 placeholder:text-black" placeholder="{country.name}" disabled>
<!--    <button class="{buttonDisplay} py-1 px-4 rounded-md mt-2 bg-primary-500 active:bg-primary-400 active:scale-[0.95]" on:click={checkTrueAnswer}>Check</button>-->
  </div>
</div>
