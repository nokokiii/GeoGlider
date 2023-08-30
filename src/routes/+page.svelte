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
          name: "Afganistan",
          keys: ["afganistan", "islamiski emirat afganistanu"],
          flag: "https://flagcdn.com/w2560/af.png"
      },
      {
          name: "Albania",
          keys: ["albania"],
          flag: "https://flagcdn.com/w2560/al.png"
      },
      {
          name: "Algieria",
          keys: ["algieria", "algierska republika ludowo-demokratyczna"],
          flag: "https://flagcdn.com/w2560/dz.png"
      },
      {
          name: "Andora",
          keys: ["andora", "księstwo andory"],
          flag: "https://flagcdn.com/w2560/ad.png"
      },
      {
          name: "Anglia",
          keys: ["anglia"],
          flag: "https://flagcdn.com/w2560/gb-eng.png"
      },
      {
          name: "Angola",
          keys: ["angola", "republika angoli"],
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
          keys: ["arabia saudyjska","królestwo arabii saudyjskiej"],
          flag: "https://flagcdn.com/w2560/sa.png"
      },
      {
          name: "Argentyna",
          keys: ["argentyna", "republika argentyńska"],
          flag: "https://flagcdn.com/w2560/ar.png"
      },
      {
          name: "Armenia",
          keys: ["armenia", "republika armenii"],
          flag: "https://flagcdn.com/w2560/am.png"
      },
      {
          name: "Aruba",
          keys: ["aruba"],
          flag: "https://flagcdn.com/w2560/aw.png"
      },
      {
          name: "Australia",
          keys: ["australia", "związek australijski"],
          flag: "https://flagcdn.com/w2560/au.png"
      },
      {
          name: "Austria",
          keys: ["austria", "republika austrii"],
          flag: "https://flagcdn.com/w2560/at.png"
      },
      {
          name: "Azerbejdżan",
          keys: ["azerbejdżan", "republika azerbejdżanu"],
          flag: "https://flagcdn.com/w2560/az.png"
      },
      {
          name: "Bahamy",
          keys: ["bahamy", "wspólnota bahamów"],
          flag: "https://flagcdn.com/w2560/bs.png"
      },
      {
          name: "Bahrajn",
          keys: ["bahrajn", "królestwo bahrajnu"],
          flag: "https://flagcdn.com/w2560/bh.png"
      },
      {
          name: "Bangladesz",
          keys: ["bangladesz", "ludowa republika bangladeszu"],
          flag: "https://flagcdn.com/w2560/bd.png"
      },
      {
          name: "Barbados",
          keys: ["barbados"],
          flag: "https://flagcdn.com/w2560/bb.png"
      },
      {
          name: "Belgia",
          stolica: "",
          keys: ["belgia", "królestwo belgii"],
          flag: "https://flagcdn.com/w2560/be.png"
      },
      {
          name: "Belize",
          stolica: "Belmopan",
          tag: ["Ameryka Północna"],
          keys: ["belize"],
          flag: "https://flagcdn.com/w2560/bz.png"
      },
      {
          name: "Benin",
          stolica: "Porto-Novo",
          tag: ["Afryka"],
          keys: ["benin"],
          flag: "https://flagcdn.com/w2560/bj.png"
      },
  ];

  shuffleArray(Countries);
</script>

<div class="grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  pt-20 gap-y-10 mb-20">
  {#each Countries as country}
    <FlagCard country={country} />
  {/each}
</div>