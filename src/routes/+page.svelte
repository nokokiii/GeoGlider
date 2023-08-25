<script>
  import FlagCard from "./Components/FlagCard.svelte";
  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

  let Countries = [
      {
          name: "Afghanistan",
          keys: ["afganistan"],
          flag: "https://flagcdn.com/w2560/af.png"
      },
      {
          name: "Albania",
          keys: ["albania"],
          flag: "https://flagcdn.com/w2560/al.png"
      },
      {
          name: "Algieria",
          keys: ["algieria"],
          flag: "https://flagcdn.com/w2560/dz.png"
      },
      {
          name: "Andora",
          keys: ["andora"],
          flag: "https://flagcdn.com/w2560/ad.png"
      },
      {
          name: "Anglia",
          keys: ["anglia"],
          flag: "https://flagcdn.com/w2560/gb-eng.png"
      },
      {
          name: "Angola",
          keys: ["angola"],
          flag: "https://flagcdn.com/w2560/ao.png"
      },
      {
          name: "Anguilla",
          keys: ["anguilla"],
          flag: "https://flagcdn.com/w2560/ai.png"
      },
      {
          name: "Antarktyda",
          keys: ["antarktyda"],
          flag: "https://flagcdn.com/w2560/aq.png"
      },
      {
          name: "Antigua i Barbuda",
          keys: ["antigua i barbuda"],
          flag: "https://flagcdn.com/w2560/ag.png"
      },
      {
          name: "Arabia Saudyjska",
          keys: ["arabia saudyjska"],
          flag: "https://flagcdn.com/w2560/sa.png"
      },
      {
          name: "Argentyna",
          keys: ["argentyna"],
          flag: "https://flagcdn.com/w2560/ar.png"
      },
      {
          name: "Armenia",
          keys: ["armenia"],
          flag: "https://flagcdn.com/w2560/am.png"
      },
      {
          name: "Aruba",
          keys: ["aruba"],
          flag: "https://flagcdn.com/w2560/aw.png"
      },
      {
          name: "Australia",
          keys: ["australia"],
          flag: "https://flagcdn.com/w2560/au.png"
      },
      {
          name: "Austria",
          keys: ["austria"],
          flag: "https://flagcdn.com/w2560/at.png"
      },
      {
          name: "Azerbejdżan",
          keys: ["azerbejdżan"],
          flag: "https://flagcdn.com/w2560/az.png"
      },
      {
          name: "Bahamy",
          keys: ["bahamy"],
          flag: "https://flagcdn.com/w2560/bs.png"
      },
      {
          name: "Bahrajn",
          keys: ["bahrajn"],
          flag: "https://flagcdn.com/w2560/bh.png"
      },
      {
          name: "Bangladesz",
          keys: ["bangladesz"],
          flag: "https://flagcdn.com/w2560/bd.png"
      },

  ];

  shuffleArray(Countries);
</script>

<div class="grid grid-cols-5 pt-20 px-40 gap-y-10 mb-20">
  {#each Countries as country}
    <FlagCard country={country} />
  {/each}
</div>