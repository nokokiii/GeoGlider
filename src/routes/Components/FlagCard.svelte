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
    <input bind:value={answer} class="{displayInput} rounded-lg py-4 px-2 input text-black h-[3vh] flex self-center 2xl:w-[10vw] xl:w-[10vw] lg:w-[15vw] md:w-[20vw] sm:w-[25vw] w-[20rem]" type="text" placeholder="Type your answer..." on:keyup={handleInput} >
    <input class="{displayAnswer} rounded-lg py-4 px-2 input-success text-black opacity-70 h-[3vh] flex self-center placeholder:text-black 2xl:w-[10vw] xl:w-[10vw] lg:w-[15vw] md:w-[20vw] sm:w-[25vw] w-[20rem]" placeholder="{country.name}" disabled>
  </div>
</div>
