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
          captialCity: "",
          keys: ["belgia", "królestwo belgii"],
          flag: "https://flagcdn.com/w2560/be.png"
      },
      {
          name: "Belize",
          captialCity: "Belmopan",
          tag: ["Ameryka Północna"],
          keys: ["belize"],
          flag: "https://flagcdn.com/w2560/bz.png"
      },
      {
          name: "Benin",
          captialCity: "Porto-Novo",
          tag: ["Afryka"],
          keys: ["benin"],
          flag: "https://flagcdn.com/w2560/bj.png"
      },
      {
        name: "Birma (Mjanma)",
        keys: ["birma", "mjanma"],
        flag: "https://flagcdn.com/w2560/mm.png"
    },
    {
        name: "Boliwia",
        keys: ["boliwia"],
        flag: "https://flagcdn.com/w2560/bo.png"
    },
    {
        name: "Bosnia i Hercegowina",
        keys: ["bosnia i hercegowina"],
        flag: "https://flagcdn.com/w2560/ba.png"
    },
    {
        name: "Botswana",
        keys: ["botswana"],
        flag: "https://flagcdn.com/w2560/bw.png"
    },
    {
        name: "Brazylia",
        keys: ["brazylia"],
        flag: "https://flagcdn.com/w2560/br.png"
    },
    {
        name: "Brunei",
        keys: ["brunei"],
        flag: "https://flagcdn.com/w2560/bn.png"
    },
    {
        name: "Bułgaria",
        keys: ["bułgaria"],
        flag: "https://flagcdn.com/w2560/bg.png"
    },
    {
        name: "Burkina Faso",
        keys: ["burkina faso"],
        flag: "https://flagcdn.com/w2560/bf.png"
    },
    {
        name: "Burundi",
        keys: ["burundi"],
        flag: "https://flagcdn.com/w2560/bi.png"
    },
    {
        name: "Chile",
        keys: ["chile"],
        flag: "https://flagcdn.com/w2560/cl.png"
    },
    {
        name: "Chiny",
        keys: ["chiny"],
        flag: "https://flagcdn.com/w2560/cn.png"
    },
    {
        name: "Chorwacja",
        keys: ["chorwacja"],
        flag: "https://flagcdn.com/w2560/hr.png"
    },
    {
        name: "Cypr",
        keys: ["cypr"],
        flag: "https://flagcdn.com/w2560/cy.png"
    },
    {
        name: "Czad",
        keys: ["czad"],
        flag: "https://flagcdn.com/w2560/td.png"
    },
    {
        name: "Czechy",
        keys: ["czechy"],
        flag: "https://flagcdn.com/w2560/cz.png"
    },
    {
        name: "Dania",
        keys: ["dania"],
        flag: "https://flagcdn.com/w2560/dk.png"
    },
    {
        name: "Dominika",
        keys: ["dominika"],
        flag: "https://flagcdn.com/w2560/dm.png"
    },
    {
        name: "Dominikana",
        keys: ["dominikana"],
        flag: "https://flagcdn.com/w2560/do.png"
    },
    {
        name: "Dżibuti",
        keys: ["dżibuti"],
        flag: "https://flagcdn.com/w2560/dj.png"
    },
    {
        name: "Egipt",
        keys: ["egipt"],
        flag: "https://flagcdn.com/w2560/eg.png"
    },
    {
        name: "Ekwador",
        keys: ["ekwador"],
        flag: "https://flagcdn.com/w2560/ec.png"
    },
    {
        name: "Erytrea",
        keys: ["erytrea"],
        flag: "https://flagcdn.com/w2560/er.png"
    },
    {
        name: "Estonia",
        keys: ["estonia"],
        flag: "https://flagcdn.com/w2560/ee.png"
    },
    {
        name: "Eswatini",
        keys: ["eswatini"],
        flag: "https://flagcdn.com/w2560/sz.png"
    },
    {
        name: "Etiopia",
        keys: ["etiopia"],
        flag: "https://flagcdn.com/w2560/et.png"
    },
    {
        name: "Fidżi",
        keys: ["fidżi"],
        flag: "https://flagcdn.com/w2560/fj.png"
    },
    {
        name: "Filipiny",
        keys: ["filipiny"],
        flag: "https://flagcdn.com/w2560/ph.png"
    },
    {
        name: "Finlandia",
        keys: ["finlandia"],
        flag: "https://flagcdn.com/w2560/fi.png"
    },
    {
        name: "Francja",
        keys: ["francja"],
        flag: "https://flagcdn.com/w2560/fr.png"
    },
    {
        name: "Gabon",
        keys: ["gabon"],
        flag: "https://flagcdn.com/w2560/ga.png"
    },
    {
        name: "Gambia",
        keys: ["gambia"],
        flag: "https://flagcdn.com/w2560/gm.png"
    },
    {
        name: "Ghana",
        keys: ["ghana"],
        flag: "https://flagcdn.com/w2560/gh.png"
    },
    {
        name: "Grecja",
        keys: ["grecja"],
        flag: "https://flagcdn.com/w2560/gr.png"
    },
    {
        name: "Grenada",
        keys: ["grenada"],
        flag: "https://flagcdn.com/w2560/gd.png"
    },
    {
        name: "Gruzja",
        keys: ["gruzja"],
        flag: "https://flagcdn.com/w2560/ge.png"
    },
    {
        name: "Gujana",
        keys: ["gujana"],
        flag: "https://flagcdn.com/w2560/gy.png"
    },
    {
        name: "Gwatemala",
        keys: ["gwatemala"],
        flag: "https://flagcdn.com/w2560/gt.png"
    },
    {
        name: "Gwinea",
        keys: ["gwinea"],
        flag: "https://flagcdn.com/w2560/gn.png"
    },
    {
        name: "Gwinea Bissau",
        keys: ["gwinea bissau"],
        flag: "https://flagcdn.com/w2560/gw.png"
    },
    {
        name: "Gwinea Równikowa",
        keys: ["gwinea równikowa"],
        flag: "https://flagcdn.com/w2560/gq.png"
    },
    {
        name: "Haiti",
        keys: ["haiti"],
        flag: "https://flagcdn.com/w2560/ht.png"
    },
    {
        name: "Hiszpania",
        keys: ["hiszpania"],
        flag: "https://flagcdn.com/w2560/es.png"
    },
    {
        name: "Holandia",
        keys: ["holandia"],
        flag: "https://flagcdn.com/w2560/nl.png"
    },
    {
        name: "Honduras",
        keys: ["honduras"],
        flag: "https://flagcdn.com/w2560/hn.png"
    },
    {
        name: "Indie",
        keys: ["indie"],
        flag: "https://flagcdn.com/w2560/in.png"
    },
    {
        name: "Indonezja",
        keys: ["indonezja"],
        flag: "https://flagcdn.com/w2560/id.png"
    },
    {
        name: "Irak",
        keys: ["irak"],
        flag: "https://flagcdn.com/w2560/iq.png"
    },
    {
        name: "Iran",
        keys: ["iran"],
        flag: "https://flagcdn.com/w2560/ir.png"
    },
    {
        name: "Irlandia",
        keys: ["irlandia"],
        flag: "https://flagcdn.com/w2560/ie.png"
    },
    {
        name: "Islandia",
        keys: ["islandia"],
        flag: "https://flagcdn.com/w2560/is.png"
    },
    {
        name: "Izrael",
        keys: ["izrael"],
        flag: "https://flagcdn.com/w2560/il.png"
    },
    {
        name: "Jamajka",
        keys: ["jamajka"],
        flag: "https://flagcdn.com/w2560/jm.png"
    },
    {
        name: "Japonia",
        keys: ["japonia"],
        flag: "https://flagcdn.com/w2560/jp.png"
    },
    {
        name: "Jemen",
        keys: ["jemen"],
        flag: "https://flagcdn.com/w2560/ye.png"
    },
    {
        name: "Jordania",
        keys: ["jordania"],
        flag: "https://flagcdn.com/w2560/jo.png"
    },
    {
        name: "Kambodża",
        keys: ["kambodża"],
        flag: "https://flagcdn.com/w2560/kh.png"
    },
    {
        name: "Kamerun",
        keys: ["kamerun"],
        flag: "https://flagcdn.com/w2560/cm.png"
    },
    {
        name: "Kanada",
        keys: ["kanada"],
        flag: "https://flagcdn.com/w2560/ca.png"
    },
    {
        name: "Katar",
        keys: ["katar"],
        flag: "https://flagcdn.com/w2560/qa.png"
    },
    {
        name: "Kazachstan",
        keys: ["kazachstan"],
        flag: "https://flagcdn.com/w2560/kz.png"
    },
    {
        name: "Kenia",
        keys: ["kenia"],
        flag: "https://flagcdn.com/w2560/ke.png"
    },
    {
        name: "Kirgistan",
        keys: ["kirgistan"],
        flag: "https://flagcdn.com/w2560/kg.png"
    },
    {
        name: "Kiribati",
        keys: ["kiribati"],
        flag: "https://flagcdn.com/w2560/ki.png"
    },
    {
        name: "Kolumbia",
        keys: ["kolumbia"],
        flag: "https://flagcdn.com/w2560/co.png"
    },
    {
        name: "Komory",
        keys: ["komory"],
        flag: "https://flagcdn.com/w2560/km.png"
    },
    {
        name: "Kongo",
        keys: ["kongo"],
        flag: "https://flagcdn.com/w2560/cg.png"
    },
    {
        name: "Korea Północna",
        keys: ["korea północna"],
        flag: "https://flagcdn.com/w2560/kp.png"
    },
    {
        name: "Korea Południowa",
        keys: ["korea południowa"],
        flag: "https://flagcdn.com/w2560/kr.png"
    },
    {
        name: "Kosowo",
        keys: ["kosowo"],
        flag: "https://flagcdn.com/w2560/xk.png"
    },
    {
        name: "Kostaryka",
        keys: ["kostaryka"],
        flag: "https://flagcdn.com/w2560/cr.png"
    },
    {
        name: "Kuba",
        keys: ["kuba"],
        flag: "https://flagcdn.com/w2560/cu.png"
    },
    {
        name: "Kuwejt",
        keys: ["kuwejt"],
        flag: "https://flagcdn.com/w2560/kw.png"
    },
    {
        name: "Laos",
        keys: ["laos"],
        flag: "https://flagcdn.com/w2560/la.png"
    },
    {
        name: "Lesotho",
        keys: ["lesotho"],
        flag: "https://flagcdn.com/w2560/ls.png"
    },
    {
        name: "Liban",
        keys: ["liban"],
        flag: "https://flagcdn.com/w2560/lb.png"
    },
    {
        name: "Liberia",
        keys: ["liberia"],
        flag: "https://flagcdn.com/w2560/lr.png"
    },
    {
        name: "Libia",
        keys: ["libia"],
        flag: "https://flagcdn.com/w2560/ly.png"
    },
    {
        name: "Liechtenstein",
        keys: ["liechtenstein"],
        flag: "https://flagcdn.com/w2560/li.png"
    },
    {
        name: "Litwa",
        keys: ["litwa"],
        flag: "https://flagcdn.com/w2560/lt.png"
    },
    {
        name: "Luksemburg",
        keys: ["luksemburg"],
        flag: "https://flagcdn.com/w2560/lu.png"
    },
    {
        name: "Łotwa",
        keys: ["łotwa"],
        flag: "https://flagcdn.com/w2560/lv.png"
    },
    {
        name: "Macedonia Północna",
        keys: ["macedonia północna"],
        flag: "https://flagcdn.com/w2560/mk.png"
    },
    {
        name: "Madagaskar",
        keys: ["madagaskar"],
        flag: "https://flagcdn.com/w2560/mg.png"
    },
    {
        name: "Malawi",
        keys: ["malawi"],
        flag: "https://flagcdn.com/w2560/mw.png"
    },
    {
        name: "Malediwy",
        keys: ["malediwy"],
        flag: "https://flagcdn.com/w2560/mv.png"
    },
    {
        name: "Malezja",
        keys: ["malezja"],
        flag: "https://flagcdn.com/w2560/my.png"
    },
    {
        name: "Mali",
        keys: ["mali"],
        flag: "https://flagcdn.com/w2560/ml.png"
    },
    {
        name: "Malta",
        keys: ["malta"],
        flag: "https://flagcdn.com/w2560/mt.png"
    },
    {
        name: "Maroko",
        keys: ["maroko"],
        flag: "https://flagcdn.com/w2560/ma.png"
    },
    {
        name: "Mauretania",
        keys: ["mauretania"],
        flag: "https://flagcdn.com/w2560/mr.png"
    },
    {
        name: "Mauritius",
        keys: ["mauritius"],
        flag: "https://flagcdn.com/w2560/mu.png"
    },
    {
        name: "Meksyk",
        keys: ["meksyk"],
        flag: "https://flagcdn.com/w2560/mx.png"
    },
    {
        name: "Mikronezja",
        keys: ["mikronezja"],
        flag: "https://flagcdn.com/w2560/fm.png"
    },
    {
        name: "Mołdawia",
        keys: ["mołdawia"],
        flag: "https://flagcdn.com/w2560/md.png"
    },
    {
        name: "Monako",
        keys: ["monako"],
        flag: "https://flagcdn.com/w2560/mc.png"
    },
  ];

   shuffleArray(Countries);

  let flipped = false;

  function toggleCards() {
      flipped = !flipped;
  }
</script>

<div class="flex justify-center w-full mb-5 mt-10">
    <button on:click={toggleCards} class="flex items-center">Odwroć wszystkie flagi</button>
</div>

<div class="grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  pt-20 gap-y-10 mb-20">
  {#each Countries as country}
    <FlagCard country={country} flipped={flipped} />
  {/each}
</div>
