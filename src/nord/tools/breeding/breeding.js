nord.breeding = {
  // details of possible horse genes
  // [ name, rgx, sort ]
  geneData: {
    common: [
      ["black", /\b(E|e)(E|e)\b/, ["E", "e"]],
      ["agouti", /(A[t+]?|a)(A[t+]?|a)/, ["At", "A", "A+", "a"]],
    ],
    dilutes: [
      ["champagne", /\b(Ch|n)(Ch)\b/, ["n", "Ch"]],
      ["sooty", /\b(Sty|n)(Sty)\b/, ["n", "Sty"]],
      ["silver", /\b(Z|n)(Z)\b/, ["n", "Z"]],
      ["pangare", /\b(P|n)(P)\b/, ["n", "P"]],
      ["cream", /\b(Cr|n)(Cr)\b/, ["n", "Cr"]],
      ["grey", /\b(G|n)(G)\b/, ["n", "G"]],
      ["roan", /\b(R|n)(R)\b/, ["n", "R"]],
      ["dun", /\b(D|n)(D)\b/, ["n", "D"]],
      ["pearl", /\b(prl|n)(prl)\b/, ["n", "prl"]],
      ["flaxen", /\b(f|n)(f)\b/, ["n", "f"]],
      ["merlot", /\b(Me|n)(Me)\b/, ["n", "Me"]],
      ["mushroom", /\b(mu|n)(mu)\b/, ["n", "mu"]],
      ["noir", /\b(Nir|n)(Nir)\b/, ["n", "Nir"]],
      ["lilac", /\b(li|n)(li)\b/, ["n", "li"]],
      ["shift", /\b(Sft|n)(Sft)\b/, ["n", "Sft"]],
      ["banding", /\b(Bd|n)(Bd)\b/, ["n", "Bd"]],
      ["ticked", /\b(Tk|n)(Tk)\b/, ["n", "Tk"]],
      ["verdin", /\b(Vr|n)(Vr)\b/, ["n", "Vr"]],
      ["point", /\b(Pt|n)(Pt)\b/, ["n", "Pt"]],
      ["webbed", /\b(Wb|n)(Wb)\b/, ["n", "Wb"]],
      ["caped", /\b(Kd|n)(Kd)\b/, ["n", "Kd"]],
    ],
    whites: [
      ["sabino", /\b(Sb|n)(Sb)\b/, ["n", "Sb"]],
      ["tobiano", /\b(Tb|n)(Tb)\b/, ["n", "Tb"]],
      ["rabicano", /\b(Rb|n)(Rb)\b/, ["n", "Rb"]],
      ["overo", /\b(O|n)(O)\b/, ["n", "O"]],
      ["splash", /\b(Spl|n)(Spl)\b/, ["n", "Spl"]],
      ["white", /\b(W|n)(W)\b/, ["n", "W"]],
    ],
  },

  // list of all appaloosa patterns
  patternData: [
    "No Pattern",
    "patn1",
    "patn2",
    "varn",
    "snow",
    "frost",
    "fall",
    "manchado",
  ],

  // details of different mutations
  // [ name, rgx, sort, [month] ]
  mutationData: {
    breedable: [
      ["pumpkin", /\b(Pkn|n)(Pkn)\b/, ["n", "Pkn"], [8, 9, 10]],
      ["eggnog", /\b(Nog|n)(Nog)\b/, ["n", "Nog"], [10, 11, 0, 1]],
    ],
    normal: [
      ["glimmer", /\b(Glm(?:\^r)?|n)(Glm(?:\^r)?)\b/, ["n", "Glm", "Glm\^r"]],
      ["fawn", /\b(Fwn(?:\^f)?|n)(Fwn(?:\^f)?)\b/, ["n", "Fwn", "Fwn\^f"]],
      ["snowglobe", /\b(Glb|n)(Glb)\b/, ["n", "Glb"]],
      ["mandarin", /\b(Mnd|n)(Mnd)\b/, ["n", "Mnd"]],
      ["agis", /\b(Ags|n)(Ags)\b/, ["n", "Ags"]],
      ["ailurus", /\b(Ai|n)(Ai)\b/, ["n", "Ai"]],
      ["angler", /\b(Ang|n)(Ang)\b/, ["n", "Ang"]],
      ["atlanticus", /\b(Atl|n)(Atl)\b/, ["n", "Atl"]],
      ["aquatic", /\b(Aq|n)(Aq)\b/, ["n", "Aq"]],
      ["bloodsplash", /\b(Bsh|n)(Bsh)\b/, ["n", "Bsh"]],
      ["butterfly", /\b(Bp|n)(Bp)\b/, ["n", "Bp"]],
      ["candycane", /\b(Cnd|n)(Cnd)\b/, ["n", "Cnd"]],
      ["cemophora", /\b(Cmp|n)(Cmp)\b/, ["n", "Cmp"]],
      ["checkered", /\b(Cc|n)(Cc)\b/, ["n", "Cc"]],
      ["christmasbells", /\b(Bls|n)(Bls)\b/, ["n", "Bls"]],
      ["christmaslights", /\b(Lht|n)(Lht)\b/, ["n", "Lht"]],
      ["cloudedleopard", /\b(Cd|n)(Cd)\b/, ["n", "Cd"]],
      ["ectotherm", /\b(Ect|n)(Ect)\b/, ["n", "Ect"]],
      //   ["fawn", /\b(Fwn|n)(Fwn)\b/, ["n", "Fwn"]],
      ["frostsplash", /\b(Fspl|n)(Fspl)\b/, ["n", "Fspl"]],
      ["giraffe", /\b(Gr|n)(Gr)\b/, ["n", "Gr"]],
      ["griffinstouch", /\b(Gft|n)(Gft)\b/, ["n", "Gft"]],
      ["jaguar", /\b(Ja|n)(Ja)\b/, ["n", "Ja"]],
      ["kascel", /\b(Kc|n)(Kc)\b/, ["n", "Kc"]],
      ["kintsugi", /\b(Kts|n)(Kts)\b/, ["n", "Kts"]],
      ["lacedtobiano", /\b(Tl|n)(Tl)\b/, ["n", "Tl"]],
      ["moulin", /\b(M|n)(M)\b/, ["n", "M"]],
      ["masquerade", /\b(Msq|n)(Msq)\b/, ["n", "Msq"]],
      ["panda", /\b(Pan|n)(Pan)\b/, ["n", "Pan"]],
      ["peafowl", /\b(Pwl|n)(Pwl)\b/, ["n", "Pwl"]],
      ["snowdripple", /\b(Sd|n)(Sd)\b/, ["n", "Sd"]],
      ["stainedglass", /\b(Sgl|n)(Sgl)\b/, ["n", "Sgl"]],
      ["tabby", /\b(Ty|n)(Ty)\b/, ["n", "Ty"]],
      ["tiger", /\b(Ti|n)(Ti)\b/, ["n", "Ti"]],
      ["tigerroan", /\b(Tr|n)(Tr)\b/, ["n", "Tr"]],
      ["zebra", /\b(Ze|n)(Ze)\b/, ["n", "Ze"]],
      ["inkspill", /\b(Iks|n)(Iks)\b/, ["n", "Iks"]],
      ["carved", /\b(Crv|n)(Crv)\b/, ["n", "Crv"]],
      ["wooded", /\b(Wd|n)(Wd)\b/, ["n", "Wd"]],
      ["universe", /\b(Unv|n)(Unv)\b/, ["n", "Unv"]],
      ["hummingbird", /\b(Hmg|n)(Hmg)\b/, ["n", "Hmg"]],
      ["henna", /\b(Hn|n)(Hn)\b/, ["n", "Hn"]],
      ["flametouched", /\b(Flm|n)(Flm)\b/, ["n", "Flm"]],
      ["emblem", /\b(Em|n)(Em)\b/, ["n", "Em"]],
      ["entemos", /\b(Es|n)(Es)\b/, ["n", "Es"]],
      ["ortho", /\b(OR|n)(OR)\b/, ["n", "OR"]],
    ],
  },

  // details of anomalies
  // [ name, rgx, gene ]
  anomalyData: [
    ["Albino", /\b(Alb)\b/, "Alb"],
    ["Corruption", /\b(Cor)\b/, "Cor"],
    ["Melanism", /\b(Mel)\b/, "Mel"],
    ["Spectral", /\b(Sct)\b/, "Sct"],
    ["Vitiligo", /\b(Vit)\b/, "Vit"],
    ["Xolo", /\b(Xo)\b/, "Xo"],
  ],

  traitData: [
    "Birdcatcher Spots",
    "Brindle",
    "Bend-or Spots",
    "Somatic",
    "Chimera",
    "Lacing",
	"Occular",
	"Heterochromia",
	"Freckles"
  ],

  // [ pheno, rgx ]
  phenoData: {
    common: [
      ["Chestnut", /\bee\s(?:A[t+]?|a){2}\b/],
      ["Black", /\bE[Ee]\saa\b/],
      ["Bay", /\bE[Ee]\sA[Aa]\b/],
      ["Wild Bay", /\bE[Ee]\sA\+(?:A\+?|a)\b/],
      ["Seal Bay", /\bE[Ee]\sAt(?:At?|a)\b/],
      ["Wild Seal Bay", /\bE[Ee]\sA\+At\b/],
    ],
    normal: [
      ["Champagne", /\b(?:n|Ch)Ch\b/],
      ["Cream", /\b(?:n|Cr)Cr\b/],
      ["Dominant White", /\b(?:n|W)W\b/],
      ["Dun", /\b(?:n|D)D\b/],
      ["Flaxen", /\b(?:n|f)f\b/],
      ["Grey", /\b(?:n|G)G\b/],
      ["Overo", /\b(?:n|O)O\b/],
      ["Pangare", /\b(?:n|P)P\b/],
      ["Pearl", /\b(?:n|prl)prl\b/],
      ["Rabicano", /\b(?:n|Rb)Rb\b/],
      ["Roan", /\b(?:n|R)R\b/],
      ["Sabino", /\b(?:n|Sb)Sb\b/],
      ["Silver", /\b(?:n|Z)Z\b/],
      ["Sooty", /\b(?:n|Sty)Sty\b/],
      ["Splash", /\b(?:n|Spl)Spl\b/],
      ["Tobiano", /\b(?:n|Tb)Tb\b/],
      ["Merlot", /\b(?:n|Me)Me\b/],
      ["Mushroom", /\b(?:n|mu)mu\b/],
      ["Noir", /\b(?:n|Nir)Nir\b/],
      ["Lilac", /\b(?:n|li)li\b/],
      ["Shift", /\b(?:n|Sft)Sft\b/],
      ["Banding", /\b(?:n|Bd)Bd\b/],
      ["Ticked", /\b(?:n|Tk)Tk\b/],
      ["Verdin", /\b(?:n|Vr)Vr\b/],
      ["Point", /\b(?:n|Pt)Pt\b/],
      ["Webbed", /\b(?:n|Wb)Wb\b/],
      ["Caped", /\b(?:n|Kd)Kd\b/],
    ],
    appaloosa: [
      ["Snowfall Appaloosa", /\b(LpLp|nLp)(?:\s(fall|patn2|patn1|manchado|varn|frost|snow))?\sfall\b/],
      ["Snowcap Appaloosa", /\bLpLp\spatn2\spatn2\b/],
      ["Fewspot Appaloosa", /\bLpLp\spatn1\spatn1\b/],
      ["Spotted Blanket Appaloosa", /\bnLp\spatn2\b/],
      ["Semi-Leopard Appaloosa", /\bLpLp\s(fall|patn2|patn1|manchado|varn|frost|snow)\s(fall|patn2|patn1|manchado|varn|frost|snow)\b/],
      ["Leopard Appaloosa", /\bnLp\spatn1\b/],
      ["Manchado Appaloosa", /\b(LpLp|nLp)(?:\smanchado)?\smanchado\b/],
      ["Varnish Roan Appaloosa", /\b(LpLp|nLp)(?:\svarn)?\svarn\b/],
      ["Frosted Appaloosa", /\b(LpLp|nLp)(?:\sfrost)?\sfrost\b/],
      ["Snowflake Appaloosa", /\b(LpLp|nLp)(?:\ssnow)?\ssnow\b/],
    ],
    mutations: [
      ["Agis", /\b(?:n|Ags)Ags\b/],
      ["Ailurus", /\b(?:n|Ai)Ai\b/],
      ["Angler", /\b(?:n|Ang)Ang\b/],
      ["Atlanticus", /\b(?:n|Atl)Atl\b/],
      ["Aquatic", /\b(?:n|Aq)Aq\b/],
      ["Bloodsplash", /\b(?:n|Bsh)Bsh\b/],
      ["Butterfly", /\b(?:n|Bp)Bp\b/],
      ["Candy Cane", /\b(?:n|Cnd)Cnd\b/],
      ["Carved", /\b(?:n|Crv)Crv\b/],
      ["Cemophora", /\b(?:n|Cmp)Cmp\b/],
      ["Checkered", /\b(?:n|Cc)Cc\b/],
      ["Christmas Bells", /\b(?:n|Bls)Bls\b/],
      ["Christmas Lights", /\b(?:n|Lht)Lht\b/],
      ["Clouded Leopard", /\b(?:n|Cd)Cd\b/],
      ["Ectotherm", /\b(?:n|Ect)Ect\b/],
      ["Eggnog", /\b(?:n|Nog)Nog\b/],
      ["Emblem", /\b(?:n|Em)Em\b/],
      ["Entemos", /\b(?:n|Es)Es\b/],
      ["Fawn", /\b(?:n|Fwn)Fwn\b/],
      ["Festive Fawn", /\b(?:n|Fwn\^f)Fwn\^f\b/],
      ["Flametouched", /\b(?:n|Flm)Flm\b/],
      ["Frostsplash", /\b(?:n|Fspl)Fspl\b/],
      ["Giraffe", /\b(?:n|Gr)Gr\b/],
      ["Glimmer", /\b(?:n|Glm)Glm\b/],
      ["Griffin's Touch", /\b(?:n|Gft)Gft\b/],
      ["Henna", /\b(?:n|Hn)Hn\b/],
      ["Hummingbird", /\b(?:n|Hmg)Hmg\b/],
      ["Inkspill", /\b(?:n|Iks)Iks\b/],
      ["Jaguar", /\b(?:n|Ja)Ja\b/],
      ["Kascel", /\b(?:n|Kc)Kc\b/],
      ["Kintsugi", /\b(?:n|Kts)Kts\b/],
      ["Laced Tobiano", /\b(?:n|Tl)Tl\b/],
      ["Mandarin", /\b(?:n|Mnd)Mnd\b/],
      ["Masquerade", /\b(?:n|Msq)Msq\b/],
      ["Moulin", /\b(?:n|M)M\b/],
      ["Ortho", /\b(?:n|OR)OR\b/],
      ["Panda", /\b(?:n|Pan)Pan\b/],
      ["Peafowl", /\b(?:n|Pwl)Pwl\b/],
      ["Pumpkin", /\b(?:n|Pkn)Pkn\b/],
      ["Radioactive Glimmer", /\b(?:n|Glm\^r)Glm\^r\b/],
      ["Festive Fawn", /\b(?:n|Fwn\^f)Fwn\^f\b/],
      ["Snowdripple", /\b(?:n|Sd)Sd\b/],
      ["Snowglobe", /\b(?:n|Glb)Glb\b/],
      ["Stained Glass", /\b(?:n|Sgl)Sgl\b/],
      ["Tabby", /\b(?:n|Ty)Ty\b/],
      ["Tiger", /\b(?:n|Ti)Ti\b/],
      ["Tiger Roan", /\b(?:n|Tr)Tr\b/],
      ["Wooded", /\b(?:n|Wd)Wd\b/],
      ["Universe", /\b(?:n|Unv)Unv\b/],
      ["Zebra", /\b(?:n|Ze)Ze\b/],
    ],
    anomalies: [
      ["Albino", /\bAlb\b/],
      ["Corruption", /\b(Cor)\b/],
      ["Melanism", /\bMel\b/],
      ["Vitiligo", /\bVit\b/],
      ["Xolo", /\bXo\b/],
      ["Spectral", /\bSct\b/],
    ],
  },

  // breeding potion data
  potionData: [
    "No Potion",
    "Atmospherica",
    "Cookiedanner",
    "Firedapple",
    "Glitch",
    "Guardian",
    "Houndanner",
    "Lava",
    "Maple",
	"Paleo",
    "Pastel Dun",
    "Pot 'o' Gold",
	"Tidal",
	"Roche",
    "Shift",
	"Strike",
    "Wrapping Paper",
  ],

  // Horse class for constructing Horse objects
  Horse: class {
    constructor(geno = "", appy = [], traitmod = [], potions = false) {
      this._geno = "";
      this._genes = [];
      this._appaloosa = [];
      this._pheno = "";
      this._geneticsChanged = false;
      this._potions = [];

      this._traitmod = traitmod;
      this.geno = geno;
      this.appaloosa = appy;

      if (!potions) {
        potions = [0, 0, 0, 0, 0];
      } else {
        for (let p = 0; p < 5; p++) {
          if (!potions[p]) potions[p] = 0;
        }
      }
      this._potions = potions;
    }

    // TODO: move breed into class
    // static breed(sire,dam) {}

    static readPheno(horse) {
      horse._pheno = "PHENO";
      // read pheno
      const phenoData = nord.breeding.phenoData;
      let phenoStrings = [],
        carrier = [];

      // commons
      (function () {
        let testStr;

        // loop over phenoData groups
        for (let group in phenoData) {
          for (let item in phenoData[group]) {
            // if appaloosa we need appaloosa genes and patterns
            if (group === "appaloosa") {
				// console.log(horse.geno, horse.appaloosa);

			//   let appyReaderDictionary = [
			// 	['nLp|LpLp', 'snow', 'snowflake'],
			//   ];
				
              testStr = horse.geno.match(/\b((?:n|Lp)Lp)\b/);
              if (testStr === "nLp") {
				// rec
                testStr += " " + horse.appaloosa[0];
              } else {
				// dom
                testStr += " " + horse.appaloosa[0] + " " + horse.appaloosa[1];
              }
            } else {
              // else just geno
              testStr = horse.geno;
            }

			console.log('pheno: ' + testStr);

            // search test string with provided regexp
            if (phenoData[group][item][1].test(testStr)) {
              // if match then push the pheno string
              phenoStrings.push(phenoData[group][item][0]);
              // exit loop early once found to save time
              if (["common", "appaloosa"].includes(group)) {
                break;
              }
            }
          }
        }
      })();

      // handle certain combinations
      (function () {
        let name = "",
          index = 0;
        // common exceptions
        (function () {
          // Pangare
          if (/\b[nP]P\b/.test(horse.geno)) {
            name = "Pangare";
            const rgx = /\b(?:n|Sty|Z|R|Dn|Cr|Ch){2}\b/;
            phenoStrings.splice(phenoStrings.indexOf(name), 1);
            if (phenoStrings.includes("Black") && !rgx.test(horse.geno)) {
              carrier.push(name);
            } else {
              phenoStrings.unshift(name);
            }
          }

          // Flaxen
          if (/\b[nf]f\b/.test(horse.geno)) {
            name = "Flaxen";
            phenoStrings.splice(phenoStrings.indexOf(name), 1);
            if (
              !phenoStrings.includes("Chestnut") ||
              /\bnf\b/.test(horse.geno)
            ) {
              carrier.push(name);
            } else {
              phenoStrings.unshift(name);
            }
          }

          // Silver
          if (/\b[nZ]Z\b/.test(horse.geno)) {
            name = "Silver";
            phenoStrings.splice(phenoStrings.indexOf(name), 1);
            if (phenoStrings.includes("Chestnut")) {
              carrier.push(name);
            } else {
              phenoStrings.unshift(name);
            }
          }

          // Sooty
          if (/\b[nSty]Sty\b/.test(horse.geno)) {
            name = "Sooty";
            const rgx = /\b(?:n|P|Z|R|Dn|Cr|Ch){2}\b/;
            phenoStrings.splice(phenoStrings.indexOf(name), 1);
            if (phenoStrings.includes("Black") && !rgx.test(horse.geno)) {
              carrier.push(name);
            } else {
              phenoStrings.unshift(name);
            }
          }

          // Grey
          if (/\b[nG]G\b/.test(horse.geno)) {
            name = "Grey";
            phenoStrings.splice(phenoStrings.indexOf(name), 1);
            phenoStrings.unshift(name + " on");
          }

          // Dominant White
          if (/\b[nW]W\b/.test(horse.geno)) {
            name = "Dominant White";
            phenoStrings.splice(phenoStrings.indexOf(name), 1);
            phenoStrings.unshift(name + " on");
          }

          // Pearl
          if (/\bnprl\b/.test(horse.geno)) {
            name = "Pearl";
            phenoStrings.splice(phenoStrings.indexOf(name), 1);
            carrier.push(name);
          }

          // Merlot
          if (/\b(?:n|Me)Me\b/.test(horse.geno)) {
            let name = "Merlot";

            phenoStrings.splice(phenoStrings.indexOf(name), 1);
            const baseList = ['Black', 'Bay', 'Seal Bay', 'Wild Bay', 'Chestnut'];
            for (let i = 0; i < baseList.length; i++) {
              if (phenoStrings.includes(baseList[i])) {
                phenoStrings.splice(phenoStrings.indexOf(baseList[i]), 1);
                if (phenoStrings.includes('Cream')) {
                  phenoStrings.splice(phenoStrings.indexOf('Cream'), 1);
                  name = `Cream Merlot`;
                }
                phenoStrings.unshift(name);
                break;
              }
            }
          }

          // Verdin
          if (/\b(?:n|Vr)Vr\b/.test(horse.geno)) {
            let name = "Verdin";

            phenoStrings.splice(phenoStrings.indexOf(name), 1);
            const baseList = ['Black', 'Bay', 'Seal Bay', 'Wild Bay', 'Chestnut'];
            for (let i = 0; i < baseList.length; i++) {
              if (phenoStrings.includes(baseList[i])) {
                phenoStrings.splice(phenoStrings.indexOf(baseList[i]), 1);
                if (phenoStrings.includes('Cream')) {
                  phenoStrings.splice(phenoStrings.indexOf('Cream'), 1);
                  name = `Cream Verdin`;
                }
                phenoStrings.unshift(name);
                break;
              }
            }
          }

          // Mushroom
          if (/\b(?:n|mu)mu\b/.test(horse.geno)) {
            name = "Mushroom";
            phenoStrings.splice(phenoStrings.indexOf(name), 1);
			if (phenoStrings.includes('Cream Merlot')) {
				carrier.push(name);
			}
            else if (
              !phenoStrings.includes("Chestnut") ||
              /\bnmu\b/.test(horse.geno)
            ) {
              carrier.push(name);
            } else {
              phenoStrings.splice(phenoStrings.indexOf("Chestnut"), 1);
              switch (true) {
                case /(?:(?:[nD]{2}|CrCr).*){2}/.test(horse.geno):
                  phenoStrings.splice(phenoStrings.indexOf("Cream"), 1);
                  phenoStrings.splice(
                    phenoStrings.indexOf("Dun"),
                    1,
                    "Mushmello Dun"
                  );
                  break;

                case /(?:[nD](?:D|Cr).*){2}/.test(horse.geno):
                  phenoStrings.splice(phenoStrings.indexOf("Cream"), 1);
                  phenoStrings.splice(
                    phenoStrings.indexOf("Dun"),
                    1,
                    "Mushmino Dun"
                  );
                  break;

                case /(?:(?:(?:n|Ch){2}|CrCr).*){2}/.test(horse.geno):
                  phenoStrings.splice(phenoStrings.indexOf("Cream"), 1);
                  phenoStrings.splice(
                    phenoStrings.indexOf("Champagne"),
                    1,
                    "Mushmello Champagne"
                  );
                  break;

                case /(?:(?:(?:n|prl){2}|CrCr).*){2}/.test(horse.geno):
                  phenoStrings.splice(phenoStrings.indexOf("Cream"), 1);
                  phenoStrings.splice(
                    phenoStrings.indexOf("Pearl"),
                    1,
                    "Mushmello Pearl"
                  );
                  break;

                case /(?:(?:(?:n|Ch|prl){2}|nCr).*){3}/.test(horse.geno):
                  phenoStrings.splice(phenoStrings.indexOf("Champagne"), 1);
                  phenoStrings.splice(phenoStrings.indexOf("Cream"), 1);
                  phenoStrings.splice(
                    phenoStrings.indexOf("Pearl"),
                    1,
                    "Mushmino Champagne Pearl"
                  );
                  break;

                case /(?:(?:(?:n|Ch){2}|prlprl).*){2}/.test(horse.geno):
                  phenoStrings.splice(phenoStrings.indexOf("Champagne"), 1);
                  phenoStrings.splice(
                    phenoStrings.indexOf("Pearl"),
                    1,
                    "Mushroom Champagne Pearl"
                  );
                  break;

                case /(?:.*(?:n|Ch|Cr){2}.*){2}/.test(horse.geno):
                  phenoStrings.splice(phenoStrings.indexOf("Cream"), 1);
                  phenoStrings.splice(
                    phenoStrings.indexOf("Champagne"),
                    1,
                    "Mushmino Champagne"
                  );
                  break;

                case /(?:.*(?:n|prl|Cr){2}.*){2}/.test(horse.geno):
                  phenoStrings.splice(phenoStrings.indexOf("Cream"), 1);
                  phenoStrings.splice(
                    phenoStrings.indexOf("Pearl"),
                    1,
                    "Mushmino Pearl"
                  );
                  break;

                case /(?:n|Ch)Ch/.test(horse.geno):
                  phenoStrings.splice(
                    phenoStrings.indexOf("Champagne"),
                    1,
                    "Mushroom Champagne"
                  );
                  break;

                case /CrCr/.test(horse.geno):
                  phenoStrings.splice(
                    phenoStrings.indexOf("Cream"),
                    1,
                    "Mushmello"
                  );
                  break;

                case /nCr/.test(horse.geno):
                  phenoStrings.splice(
                    phenoStrings.indexOf("Cream"),
                    1,
                    "Mushmino"
                  );
                  break;

                case /[nD]D/.test(horse.geno):
                  phenoStrings.splice(
                    phenoStrings.indexOf("Dun"),
                    1,
                    "Dunshroom"
                  );
                  break;

                case /prlprl/.test(horse.geno):
                  phenoStrings.splice(
                    phenoStrings.indexOf("Pearl"),
                    1,
                    "Mushroom Pearl"
                  );
                  break;

                default:
                  phenoStrings.unshift(name);
              }
            }
          }

          // Lilac
          if (/\b(?:n|li)li\b/.test(horse.geno)) {
            name = "Lilac";

			// if black or bay
			phenoStrings.splice(phenoStrings.indexOf(name), 1);
			if (/\blili\b/.test(horse.geno) && /\bE(E|e)\b/.test(horse.geno)) {
				const baseList = ['Black', 'Bay', 'Seal Bay', 'Wild Bay'];
				for (let i = 0; i < baseList.length; i++) {
					if (phenoStrings.includes(baseList[i])) {
						phenoStrings.splice(phenoStrings.indexOf(baseList[i]), 1);
						phenoStrings.unshift(name);
						break;
					}
				}
			}
			// else
			else { 
				carrier.push(name) 
			}


			// if (horse.geno.includes('lili')) {
			// 	phenoStrings.splice(phenoStrings.indexOf(name), 1);
			// 	const baseList = ['Black', 'Bay', 'Seal Bay', 'Wild Bay'];
			// 	for (let i = 0; i < baseList.length; i++) {
			// 		if (phenoStrings.includes(baseList[i])) {
			// 			phenoStrings.splice(phenoStrings.indexOf(baseList[i]), 1);
			// 			phenoStrings.unshift(name);
			// 			break;
			// 		}
			// 	}
			// 	if (!phenoStrings.includes('Lilac') || phenoStrings.includes("Chestnut")) {
			// 	carrier.push(name)
			// 	}
			// }
          }
        })();
        // conditional exceptions
        function baseexception() {
          const bases = {
            Chestnut: [
              "Cremello Champagne Dun",
              "Gold Cream Champagne Dun",
              "Gold Champagne Dun",
              "Cremello Champagne",
              "Gold Cream Champagne",
              "Cremello Dun",
              "Dunalino",
              "Chestnut Pearl",
              "Chestnut Roan",
              "Chestnut Dun",
              "Cremello",
              "Palomino",
              "Gold Champagne",
            ],
            Black: [
              "Smoky Cream Champagne Dun",
              "Smoky Grullo Champagne",
              "Grullo Champagne",
              "Smoky Cream Champagne",
              "Classic Cream Champagne",
              "Smoky Cream Grullo",
              "Smoky Grullo",
              "Black Pearl",
              "Blue Roan",
              "Grullo",
              "Smoky Cream",
              "Smoky Black",
              "Classic Champagne",
            ],
            Bay: [
              "Perlino Champagne Dun",
              "Amber Cream Champagne Dun",
              "Amber Champagne Dun",
              "Perlino Champagne",
              "Amber Cream Champagne",
              "Perlino Dun",
              "Dunskin",
              "Bay Pearl",
              "Bay Roan",
              "Bay Dun",
              "Perlino",
              "Buckskin",
              "Amber Champagne",
            ],
            "Wild Bay": [
              "Wild Perlino Champagne Dun",
              "Wild Amber Cream Champagne Dun",
              "Wild Amber Champagne Dun",
              "Wild Perlino Champagne",
              "Wild Amber Cream Champagne",
              "Wild Perlino Dun",
              "Wild Dunskin",
              "Wild Bay Pearl",
              "Wild Bay Roan",
              "Wild Bay Dun",
              "Wild Perlino",
              "Wild Buckskin",
              "Wild Amber Champagne",
            ],
            "Seal Bay": [
              "Burnt Perlino Champagne Dun",
              "Sable Cream Champagne Dun",
              "Sable Champagne Dun",
              "Burnt Perlino Champagne",
              "Sable Cream Champagne",
              "Burnt Perlino Dun",
              "Burnt Dunskin",
              "Seal Bay Pearl",
              "Seal Bay Roan",
              "Seal Bay Dun",
              "Burnt Perlino",
              "Burnt Buckskin",
              "Sable Champagne",
            ],
            "Wild Seal Bay": [
              "Wild Burnt Perlino Champagne Dun",
              "Wild Sable Cream Champagne Dun",
              "Wild Sable Champagne Dun",
              "Wild Burnt Perlino Champagne",
              "Wild Sable Cream Champagne",
              "Wild Burnt Perlino Dun",
              "Wild Burnt Dunskin",
              "Wild Seal Bay Pearl",
              "Wild Seal Bay Roan",
              "Wild Seal Bay Dun",
              "Wild Burnt Perlino",
              "Wild Burnt Buckskin",
              "Wild Sable Champagne",
            ],
          };

          for (let base in bases) {
            if (phenoStrings.includes(base)) {
              switch (true) {
					case phenoStrings.includes('Cream') && phenoStrings.includes('Pearl'):
					console.log('yas');
					let posCream = phenoStrings.indexOf('Cream');
					let posPearl = phenoStrings.indexOf('Pearl');
					phenoStrings[posCream] = 'Pearl';
					phenoStrings[posPearl] = 'Cream';
					index = phenoStrings.indexOf(base);
					phenoStrings.splice(index, 1);
					break;

					case /(?:(?:(?:n|D|Ch){2}|CrCr).*){3}/.test(horse.geno):
					phenoStrings.splice(phenoStrings.indexOf("Champagne"), 1);
					phenoStrings.splice(phenoStrings.indexOf("Cream"), 1);
					phenoStrings.splice(phenoStrings.indexOf("Dun"), 1);
					index = phenoStrings.indexOf(base);
					phenoStrings[index] = bases[base][0];
					break;

					case /(?:(?:(?:n|D|Ch|Cr){2}).*){3}/.test(horse.geno):
					phenoStrings.splice(phenoStrings.indexOf("Champagne"), 1);
					phenoStrings.splice(phenoStrings.indexOf("Cream"), 1);
					phenoStrings.splice(phenoStrings.indexOf("Dun"), 1);
					index = phenoStrings.indexOf(base);
					phenoStrings[index] = bases[base][1];
					break;

					case /(?:(?:n|D|Ch){2}.*){2}/.test(horse.geno):
					phenoStrings.splice(phenoStrings.indexOf("Champagne"), 1);
					phenoStrings.splice(phenoStrings.indexOf("Dun"), 1);
					index = phenoStrings.indexOf(base);
					phenoStrings[index] = bases[base][2];
					break;

					case /(?:(?:(?:n|Ch){2}|CrCr).*){2}/.test(horse.geno):
					phenoStrings.splice(phenoStrings.indexOf("Champagne"), 1);
					phenoStrings.splice(phenoStrings.indexOf("Cream"), 1);
					index = phenoStrings.indexOf(base);
					phenoStrings[index] = bases[base][3];
					break;

					case /(?:.*(?:n|Ch|Cr){2}.*){2}/.test(horse.geno):
					phenoStrings.splice(phenoStrings.indexOf("Champagne"), 1);
					phenoStrings.splice(phenoStrings.indexOf("Cream"), 1);
					index = phenoStrings.indexOf(base);
					phenoStrings[index] = bases[base][4];
					break;

					case /(?:(?:[nD]{2}|CrCr).*){2}/.test(horse.geno):
					phenoStrings.splice(phenoStrings.indexOf("Cream"), 1);
					phenoStrings.splice(phenoStrings.indexOf("Dun"), 1);
					index = phenoStrings.indexOf(base);
					phenoStrings[index] = bases[base][5];
					break;

					case /(?:[nD](?:D|Cr).*){2}/.test(horse.geno):
					phenoStrings.splice(phenoStrings.indexOf("Cream"), 1);
					phenoStrings.splice(phenoStrings.indexOf("Dun"), 1);
					index = phenoStrings.indexOf(base);
					phenoStrings[index] = bases[base][6];
					break;

					case /(?:n|Ch)Ch/.test(horse.geno):
					phenoStrings.splice(phenoStrings.indexOf("Champagne"), 1);
					index = phenoStrings.indexOf(base);
					phenoStrings[index] = bases[base][12];
					break;

					case /CrCr/.test(horse.geno):
					phenoStrings.splice(phenoStrings.indexOf("Cream"), 1);
					index = phenoStrings.indexOf(base);
					phenoStrings[index] = bases[base][10];
					break;

					case /nCr/.test(horse.geno):
					phenoStrings.splice(phenoStrings.indexOf("Cream"), 1);
					index = phenoStrings.indexOf(base);
					phenoStrings[index] = bases[base][11];
					break;

					case /[nD]D/.test(horse.geno):
					phenoStrings.splice(phenoStrings.indexOf("Dun"), 1);
					index = phenoStrings.indexOf(base);
					phenoStrings[index] = bases[base][9];
					break;

					case /prl{2}/.test(horse.geno):
					phenoStrings.splice(phenoStrings.indexOf("Pearl"), 1);
					index = phenoStrings.indexOf(base);
					phenoStrings[index] = bases[base][7];
					break;

					case /[nR]R\s/.test(horse.geno):
					phenoStrings.splice(phenoStrings.indexOf("Roan"), 1);
					index = phenoStrings.indexOf(base);
					phenoStrings[index] = bases[base][8];
					break;

				}
            }
          }
        }

        function pumpkinexception() {
          (function fixpumpkinbase() {
            if (phenoStrings.includes("Chestnut")) {
              index = phenoStrings.indexOf("Chestnut");
            } else if (phenoStrings.includes("Black")) {
              index = phenoStrings.indexOf("Black");
            } else if (phenoStrings.includes("Bay")) {
              index = phenoStrings.indexOf("Bay");
            } else if (phenoStrings.includes("Wild Bay")) {
              index = phenoStrings.indexOf("Wild Bay");
            } else if (phenoStrings.includes("Seal Bay")) {
              index = phenoStrings.indexOf("Seal Bay");
            } else if (phenoStrings.includes("Wild Seal Bay")) {
              index = phenoStrings.indexOf("Wild Seal Bay");
            }

            phenoStrings.splice(phenoStrings.indexOf("Pumpkin"), 1);
            phenoStrings[index] = "Pumpkin";
          })();

          if (phenoStrings.includes("Roan")) {
            phenoStrings.splice(phenoStrings.indexOf("Roan"), 1);
            phenoStrings.splice(
              phenoStrings.indexOf("Pumpkin") - 1,
              0,
              "Roaned"
            );
          }

          (function fixpumpkinwhite() {
            let fix = "";
            const whites = [
              "Tobiano",
              "Rabicano",
              "Splash",
              "Overo",
              "Semi Leopard Appaloosa",
              "Leopard Appaloosa",
              "Fewspot Appaloosa",
              "Blanket Appaloosa",
              "Snowcap Appaloosa",
              "Snowflake Appaloosa",
              "Varnish Roan",
              "Frosted Appaloosa",
              "Snowfall Appaloosa",
            ];

            for (let w in whites) {
              if (phenoStrings.includes(w)) {
                phenoStrings.splice(phenoStrings.indexOf(w), 1);
                fix += fix.length === 0 ? w : w + " ";
              }
            }
            index = phenoStrings.indexOf("Pumpkin") - 1;
            if (fix) phenoStrings.splice(index, 0, fix);
          })();

          if (
            phenoStrings.includes("Silver") ||
            phenoStrings.includes("Flaxen")
          ) {
            if (phenoStrings.includes("Silver")) {
              phenoStrings.splice(phenoStrings.indexOf("Silver"), 1);
            }
            if (phenoStrings.includes("Flaxen")) {
              phenoStrings.splice(phenoStrings.indexOf("Flaxen"), 1);
            }
            phenoStrings.push("with Whipped Cream");
          }

          (function () {
            if (/(?:n|Dn)Dn/.test(horse.geno)) {
              phenoStrings.splice(phenoStrings.indexOf("Dun"), 1);
              phenoStrings[phenoStrings.indexOf("Pumpkin")] = "Dunkin";
            }
            if (/CrCr/.test(horse.geno)) {
              index = phenoStrings.indexOf("Pumpkin");
              phenoStrings[index] = "Baby Boo " + phenoStrings[index];
              phenoStrings.splice(phenoStrings.indexOf("Cream"), 1);
            }
            if (/prlprl/.test(horse.geno)) {
              index = phenoStrings.indexOf("Pumpkin");
              phenoStrings[index] = "Pearly White " + phenoStrings[index];
              phenoStrings.splice(phenoStrings.indexOf("Pearl"), 1);
            }
            if (/(?:n|Ch)Ch/.test(horse.geno)) {
              index = phenoStrings.indexOf("Pumpkin");
              phenoStrings[index] = "Bubbly " + phenoStrings[index];
              phenoStrings.splice(phenoStrings.indexOf("Champagne"), 1);
            }
            if (/nCr/.test(horse.geno)) {
              index = phenoStrings.indexOf("Pumpkin");
              phenoStrings[index] = phenoStrings[index] + " Pie";
              phenoStrings.splice(phenoStrings.indexOf("Cream"), 1);
            }
            if (/(?:n|Sty)Sty/.test(horse.geno)) {
              index = phenoStrings.indexOf("Pumpkin");
              phenoStrings[index] = phenoStrings[index] + " Spice";
              phenoStrings.splice(phenoStrings.indexOf("Sooty"), 1);
            }
          })();
        }

        if (phenoStrings.includes("Pumpkin")) {
          pumpkinexception();
        } else {
          baseexception();
        }

        if (carrier.length) {
          carrier.unshift("(");
          carrier.push("carrier )");
          phenoStrings = phenoStrings.concat(carrier);
        }
      })();

      // roll RNG phenos
      (function () {
        // chosen by horse.luck (which luck potion it was bred with)
        const chances = [
          [460, 540, 620, 700, 780, 860],
          [1500, 3000, 4500, 6000, 7500, 9000, 10500, 12000, 13500],
        ];
        // pheno to push, index matches index of respective chance
        const results = [...nord.breeding.traitData];

        const chance = chances[horse.luck],
          rng = rzl.rng1to(13500);

        function mimicry() {
          const rgx =
            /A(?:gs|ng|tl)|B(?:ls|sh|p)|C(?:c|mp|n?d|rv)|Em|F(?:lm|spl|wn)|G(?:ft|l(?:b|m(?:\^r)?))|H(?:mg|n)|Iks|Ja|Kc|Lht|M(?:nd|sq)?|Nog|P(?:[ak]n|wl)|S(?:d|gl)|T[ilry]|Unv|Wd|Ze/;

          if (!rgx.test(horse.geno)) {
            phenoStrings.push("Mimicry");
            let idx = rzl.rng0to(phenoData.mutations.length - 1),
              mimic = phenoData.mutations[idx][0];
            phenoStrings.push("(" + mimic + ")");
          }
        }

        // loop through chance array and act accordingly
        for (let c in chance) {
          if (rng <= chance[c]) {
            if (c < chance.length) {
              phenoStrings.push(results[c]);
              break;
            } else mimicry();
          }
        }

        // console.log(horse.traitmod)
        horse.traitmod.forEach((v) => {
          if (!phenoStrings.includes(v)) phenoStrings.push(v);
        });
      })();

      // roll breeding potions
      (function () {
        let potionStrings = [];

        const potionData = nord.breeding.potionData,
          potions = horse.breedingPotions;
        for (let pot in potionData) {
          let p = parseInt(pot);
          if (p === 0) continue;
          if (potions.sire.includes(p) && potions.dam.includes(p)) {
            potionStrings.push(potionData[p]);
          } else if (potions.sire.includes(p) || potions.dam.includes(p)) {
            const rng = rzl.rng1to(100);
            if (rng <= 50) {
              potionStrings.push(potionData[p]);
            }
          }
        }

        // maximum of two to be kept
        while (potionStrings.length > 2) {
          potionStrings.splice(rzl.rng1to(potionStrings.length) - 1, 1);
        }

        phenoStrings.push(potionStrings.join(" "));
      })();

      if (phenoStrings.length > 0) horse._pheno = phenoStrings.join(" ");

      // last few fixes and lethal check
      (function () {
        horse._pheno = horse._pheno.replace(
          /(Pumpkin Pie Spice)/,
          "Spiced Pumpkin Pie"
        );
        horse._pheno = horse._pheno.replace(
          /(Dunkin Pie Spice)/,
          "Spiced Dunkin Pie"
        );

        const rng = rzl.rng1to(100);
        if (/\bWW\b/.test(horse.geno)) {
          horse._pheno = "LETHAL WHITE";
        } 
        else if (/\bOO\b/.test(horse.geno) && rng <= 60) {
          horse._pheno = "LETHAL OVERO";
        } 
        else if (/\bAlbAlb\b/.test(horse.geno)) {
          horse._pheno = "LETHAL ALBINO";
        } 
        else if (/\bCorCor\b/.test(horse.geno)) {
          horse._pheno = "LETHAL CORRUPTION";
        } 
        else if (/\bMelMel\b/.test(horse.geno)) {
          horse._pheno = "LETHAL MELANISM";
        } 
        else if (/\bVitVit\b/.test(horse.geno)) {
          horse._pheno = "LETHAL VITILIGO";
        } 
        else if (/\bXoXo\b/.test(horse.geno)) {
          horse._pheno = "LETHAL XOLO";
        }
        else if (/\bSctSct\b/.test(horse.geno)) {
          horse._pheno = "LETHAL SPECTRAL";
        }
      })();

      horse._geneticsChanged = false;
    }

    get pheno() {
      // return this._pheno;

      if (!this._pheno || this._geneticsChanged == true) {
        nord.breeding.Horse.readPheno(this);
        return this._pheno;
      } else {
        return this._pheno;
      }
    }
    set pheno(pheno) {
      return;
    }

    get geno() {
      return this._geno;
    }
    set geno(geno) {
      if (!geno || typeof geno !== "string") return false;
      this._geno = geno;
      this._genes = geno == "" ? [] : geno.trim().split(" ");
      this._geneticsChanged = true;
      return true;
    }

    get genes() {
      return this._genes;
    }
    set genes(genes) {
      if (!genes || typeof genes !== "object") return false;
      this._genes = genes;
      this._geno = genes.join(" ");
      this._geneticsChanged = true;
    }

    get traitmod() {
      return this._traitmod;
    }
    set traitmod(traits) {
      if (typeof traits !== "object") return;
      this._traitmod = traits;
    }

    addGene(gene) {
      if (!gene || typeof gene !== "string") return false;
      let genes = this.genes;
      genes.push(gene);
      this.genes = genes;
      return gene;
    }

    removeGene(gene) {
      if (!gene || typeof gene !== "string") return false;
      let genes = this.genes;
      genes.push(gene);
      this.genes = genes;
      return gene;
    }

    isAppaloosa() {
      return /\b(?:n|Lp)Lp\b/.test(this.geno);
    }
    get appaloosa() {
      return this._appaloosa;
    }
    set appaloosa(appy) {
      if (!appy || typeof appy !== "object") return false;
      this._appaloosa = appy;
      this._geneticsChanged = true;
    }

    get luck() {
      return this._potions[0];
    }
    set luck(luck) {
      return;
    }

    get breedingPotions() {
      return {
        sire: [this._potions[1], this._potions[2]],
        dam: [this._potions[3], this._potions[4]],
      };
    }
    set breedingPotions(potions) {
      return;
    }
  },

  // ======================================================================
  // helper functions

  // called from breed button handler
  breed: function () {
    // 'this' is module - nord.breeding
    if (!this.initBreed()) return;
    try {
      const output = nord.state.breeding.output,
        twins = nord.state.breeding.breed.twins,
        foals = nord.state.breeding.breed.foals;
      this.rollTwinsChance();
      this.rollFoals();

      const join = "<br>" + (twins ? "AND" : "OR") + "<br>",
        strings = [];
      foals.forEach((v, i) => {
		// console.log(v.pheno);
        let appy = v.isAppaloosa() ? " ( " + v.appaloosa.join(" ") + " ) " : "",
          idx = v.geno.lastIndexOf("Lp") + 2 || 0,
          geno = v.geno.slice(0, idx) + appy + v.geno.slice(idx);
        strings[i] = "Geno: " + geno.trim() + "<br>Pheno: " + v.pheno.replace('Glimmer Radioactive Glimmer', 'Radioactive Glimmer').replace('Festive Fawn Festive Fawn', 'Festive Fawn').replace('Fawn Festive Fawn', 'Festive Fawn');
      });

      rzl.addDiv(output, { content: strings.join(join) });

    //   console.log("breed complete", nord.state.breeding.breed);
      output.classList.remove("rzl-hidden");
    } catch (e) {
      console.error(e);
      return;
    }
  },

  // initialise breed data
  initBreed: function () {
    let potions = [],
      traits = [];
    const breed = nord.state.breeding.breed,
      fields = nord.state.breeding.fields,
      siregeno = fields.siregeno.value,
      sireappy = [fields.sirepattern1.value, fields.sirepattern2.value],
      damgeno = fields.damgeno.value,
      damappy = [fields.dampattern1.value, fields.dampattern2.value];
    if (!siregeno || !damgeno) return false;

    // prepare trait mods
    if (typeof breed.traitmod === "object") {
      let idx = false,
        val = false;
      let exc = [...nord.breeding.traitData];
      let inc = [...exc, "Twins", "Mimicry"];

      traits = [...breed.traitmod]
        .map((v) => {
          switch (v) {
            case "Random (exc)":
              idx = rzl.rng0to(exc.length - 1);
              val = exc[idx];
              exc.splice(idx, 1);
              if (val) return val;
              break;

            case "Random (inc)":
              idx = rzl.rng0to(inc.length - 1);
              val = inc[idx];
              exc.splice(idx, 1);
              inc.splice(idx, 1);
              if (val) return val;
              break;

            default:
              idx = exc.indexOf(v.value);
              exc.splice(idx, 1);
              inc.splice(idx, 1);
              return v;
          }
        })
        .filter((v) => {
          if (v) return v;
        });
    } else {
      breed.traitmod = [];
    }

    // prepare potion data
    potions = [
      fields.luck.checked ? 1 : 0,
      fields.sirepotion1.selectedIndex,
      fields.sirepotion2.selectedIndex,
      fields.dampotion1.selectedIndex,
      fields.dampotion2.selectedIndex,
    ];

    // clear any old output and prepare Horse objects
    rzl.destroyChildren(nord.state.breeding.output);
    breed.sire = new this.Horse(siregeno, sireappy, false);
    breed.dam = new this.Horse(damgeno, damappy, false);
    breed.foals = [
      new this.Horse("", [], traits, potions),
      new this.Horse("", [], traits, potions),
    ];
    return true;
  },

  // roll for twins
  rollTwinsChance: function () {
    const state = nord.state.breeding;
    const potion = state.fields.luck.checked;
    const chance = potion ? 150 : 8;

    const cap = 1000;
    const rng = rzl.rng1to(cap);
    const result = rng <= chance;
    const traitmod = state.breed.traitmod.includes("Twins") ? true : false;
    const success = result || traitmod;

    state.breed.twins = success;

    state.breed.stats.twins = {
      potion,
      chance,
      cap,
      rng,
      traitmod,
      success,
    };

    return state.breed.twins;
  },

  // roll all steps for each foal
  rollFoals: function () {
    const foals = nord.state.breeding.breed.foals;
    for (let f in foals) {
      this.rollGeneSet(foals[f], "common");
      this.rollGeneSet(foals[f], "dilutes");
      this.rollGeneSet(foals[f], "whites");
      this.rollAppaloosa(foals[f]);
      this.rollMutations(foals[f]);
      this.rollAnomalies(foals[f]);
      this.modGenes(foals[f]);
    }
  },

  // roll set of genes for foal using geneData[setName]
  rollGeneSet: function (foal, setName) {
    if (!foal || !setName) return false;
    const geneSet = this.geneData[setName];
    for (let g in geneSet) this.rollGene(foal, geneSet[g]);
  },

  // roll gene for foal using geneArr
  rollGene: function (foal, geneArr) {
    if (!foal || !geneArr) return false;
    const breed = nord.state.breeding.breed;
    // console.log(geneArr);

    // gather parent and roll foal genes
    let sireGene = this.matchGenes(breed.sire.geno, geneArr[1]);
    let damGene = this.matchGenes(breed.dam.geno, geneArr[1]);

    if (!sireGene) sireGene = ["n", "n"];
    if (!damGene) damGene = ["n", "n"];

    let foalGene = this.finalisePart(sireGene, damGene, geneArr[2]);

    // join the parts together into gene
    foalGene = foalGene.join("");

    // if gene true, push gene to foal data and return
    // if (foalGene!=="nn") return foal.genes.push(foalGene);
    if (foalGene !== "nn") return foal.addGene(foalGene);
    else return false;
  },

  // roll appaloosa gene and markings
  rollAppaloosa: function (foal) {
    if (!foal) return false;

    // roll appaloosa gene and update foal.isAppaloosa
    const geneArr = ["appaloosa", /\b(Lp|n)(Lp)\b/, ["n", "Lp"]];
    const gene = this.rollGene(foal, geneArr);

    // return now if foal not appaloosa
    if (foal.isAppaloosa()) {
      const sort = ["patn1", "patn2", "varn", "snow", "frost", "fall"],
        sireappy = nord.state.breeding.breed.sire.appaloosa,
        damappy = nord.state.breeding.breed.dam.appaloosa;
      switch (gene) {
        case "LpLp":
          let newsire = [sireappy[0], sireappy[1]],
            newdam = [damappy[0], damappy[1]];
          if (newsire[1] === "No Pattern") newsire[1] = newsire[0]; // sire nLp
          if (newdam[1] === "No Pattern") newdam[1] = newdam[0]; // dam nLp
          foal.appaloosa = this.finalisePart(newsire, newdam, sort);
          break;
        case "nLp":
          switch (true) {
            case sireappy[1] !== "No Pattern": // sire LpLp
              foal.appaloosa = [sireappy[rzl.rng0to(1)], ""];
              break;
            case damappy[1] !== "No Pattern": // dam LpLp
              foal.appaloosa = [damappy[rzl.rng0to(1)], ""];
              break;
            case sireappy[0] === "No Pattern": // sire nn, damn nLp
              foal.appaloosa = [damappy[0], ""];
              break;
            case damappy[0] === "No Pattern": // sire nLp, dam nn
              foal.appaloosa = [sireappy[0], ""];
              break;
            default:
              let newappy = rzl.rng0to(1) == 0 ? sireappy[0] : damappy[0];
              foal.appaloosa = [newappy, ""];
          }
          break;
      }
    }
  },

  // roll mutations
  rollMutations: function (foal) {
    if (!foal) return false;
    var self = this;

    const siregeno = nord.state.breeding.breed.sire.geno,
      damgeno = nord.state.breeding.breed.dam.geno;

    // breedables
    (function () {
      const seasonmods = [
        ...nord.state.breeding.fields.seasonmod.selectedOptions,
      ].map((opt) => opt.value);
      for (let m in self.mutationData.breedable) {
        const mut = self.mutationData.breedable[m],
          rng = rzl.rng1to(1000),
          curDate = new Date(),
          curMonth = curDate.getMonth();
        let sireGene = self.matchGenes(siregeno, mut[1]),
          damGene = self.matchGenes(damgeno, mut[1]);
        if (sireGene || damGene) {
          if (
            mut[3].includes(curMonth) ||
            seasonmods.includes(mut[0]) ||
            rng === 1
          ) {
            if (!sireGene) sireGene = ["n", "n"];
            if (!damGene) damGene = ["n", "n"];
            let foalGene = self.finalisePart(sireGene, damGene, mut[2]);
            foalGene = foalGene.join("");
            if (foalGene !== "nn") foal.addGene(foalGene);
          }
        } else if (
          rng <= 47 &&
          (mut[3].includes(curMonth) || seasonmods.includes(mut[0]))
        ) {
          foal.addGene(mut[2].join(""));
        }
      }
    })();

    // normal
    (function () {
      for (let m in self.mutationData.normal) {
        const mut = self.mutationData.normal[m];
        let sireGene = self.matchGenes(siregeno, mut[1]),
          damGene = self.matchGenes(damgeno, mut[1]);
        if (!sireGene) sireGene = ["n", "n"];
        if (!damGene) damGene = ["n", "n"];

        if (mut[0] === "glimmer") {
          const rng = rzl.rng1to(10000);
          const x = rzl.rng1to(100);
          const srad = sireGene.includes("Glm\^r");
          const drad = damGene.includes("Glm\^r");
          const rad = ((srad || drad) && x <= 50) || rng <= 80 ? true : false;
          const gfrom = rad ? "Glm" : "Glm^r";
          const gto = rad ? "Glm^r" : "Glm";
          while (sireGene.includes(gfrom)) {
            sireGene[sireGene.indexOf(gfrom)] = gto;
          }
          while (damGene.includes(gfrom)) {
            damGene[damGene.indexOf(gfrom)] = gto;
          }
          let foalGene = self.finalisePart(sireGene, damGene, mut[2]);
          foalGene = foalGene.join("");
          if (foalGene !== "nn") foal.addGene(foalGene);
        } 
        else if (mut[0] === "fawn") {
          const rng = rzl.rng1to(10000);
          const x = rzl.rng1to(100);
          const sfestive = sireGene.includes("Fwn\^f");
          const dfestive = damGene.includes("Fwn\^f");
          const festive = ((sfestive || dfestive) && x <= 50) || rng <= 80 ? true : false;
          const gfrom = festive ? "Fwn" : "Fwn^f";
          const gto = festive ? "Fwn^f" : "Fwn";
          while (sireGene.includes(gfrom)) {
            sireGene[sireGene.indexOf(gfrom)] = gto;
          }
          while (damGene.includes(gfrom)) {
            damGene[damGene.indexOf(gfrom)] = gto;
          }
          let foalGene = self.finalisePart(sireGene, damGene, mut[2]);
          foalGene = foalGene.join("");
          if (foalGene !== "nn") foal.addGene(foalGene);
        } 
		else {
          const siremut = siregeno.match(mut[1]) || [],
            dammut = damgeno.match(mut[1]) || [];
          let foalGene = [];

          const siredom = siremut[1] === mut[2][1];
          const sirerec = siremut[1] === mut[2][0];
          const damdom = dammut[1] === mut[2][1];
          const damrec = dammut[1] === mut[2][0];

          switch (true) {
            // push dominant
            case siredom && damdom:
            case siredom && damrec:
            case sirerec && damdom:
              foalGene = [mut[2][1], mut[2][1]];
              break;

            // push recessive
            case siredom:
            case damdom:
            case sirerec && damrec:
              foalGene = [mut[2][0], mut[2][1]];
              break;
          }

          foal.addGene(foalGene.join(""));
        }
      }
    })();
  },

  rollAnomalies: function (foal) {
    if (!foal) return false;
    const breed = nord.state.breeding.breed;

    this.anomalyData.forEach((anomalyData) => {
      const siregene = breed.sire.geno.match(anomalyData[1]);
      const damgene = breed.dam.geno.match(anomalyData[1]);

      const rng = rzl.rng1to(5000);
      let pass = false;
      let lethal = false;

      if (siregene && damgene) {
        // 25% lethal, 50% pass, 25% nothing
        if (rng <= 1250) lethal = true;
        if (rng <= 3750) pass = true;
      } else if (siregene || damgene) {
        // 25% pass
        if (rng <= 1250) pass = true;
      } else {
        // 0.02% pass
        if (rng == 1) pass = true;
      }

      let gene = anomalyData[2];
      if (lethal) gene += gene;
      if (pass) foal.addGene(gene);
    });
  },

  // get gene array from given geno using given regexp
  matchGenes: function (geno, rgx) {
    if (!geno || !rgx) return false; // need geno and regex
    let match = geno.match(rgx); // get matching gene from geno as parts
    if (!match) return false;
    return [match[1], match[2]];
  },

  finalisePart: function (sirepart, dampart, sort) {
    // roll a random gene from each of the parent genes
    const sireIndex = rzl.rng0to(sirepart.length - 1),
      damIndex = rzl.rng0to(dampart.length - 1);
    let foalpart = [sirepart[sireIndex], dampart[damIndex]];

    // if sort parameter is present then sort the parts
    if (sort) foalpart.sort((a, b) => sort.indexOf(a) - sort.indexOf(b));

    return foalpart;
  },

  modGenes: function (foal) {
    const fields = nord.state.breeding.fields,
      add = fields.genemodadd.value.trim().split(" "),
      rmv = fields.genemodrmv.value.trim().split(" ");
    // console.log(add,rmv)

	// populate dictionary from gene lists
	let dictionary = [];
	function populateDictionary(geneList) {
		for (let i = 0; i < geneList.length; i++) {
			dictionary.push(geneList[i][2][1]);
			if (geneList[i][2].length === 3) {
				dictionary.push(geneList[i][2][2]);
			}
		}
	}
	populateDictionary(this.geneData.dilutes);
	populateDictionary(this.geneData.whites);
	populateDictionary(this.mutationData.breedable);
	populateDictionary(this.mutationData.normal);
	// console.log(dictionary);

	// create regex expression
	const matchRegex = new RegExp(`\\b(n?(Lp|${dictionary.join('|')})){1,2}\\b`);
	// const matchRegex = /\b(n?(Ags|Aq|Ang|Atl|Bls|Bd|Bp|Bsh|Cc|Ch|Cmp|Cnd|Crv|D|Em|Es|Flm|Fspl|Fwn|Fwn\^f|Gft|Gl|Glb|Glm|Glm\^r|Gr|Hmg|Hn|Iks|Ja|Kc|Kd|Kts|Lht|Me|Msq|Mu|Nir|Nog|O|OR|Pakn|Pkn|Pwl|Pt|prl|Rb|Sb|Sd|Sgl|Spl|Tk|Tb|Ti|Tl|Tr|Ty|Unv|Vr|Wb|Wd|Ze|Zn){1,2})\b/;
	// console.log(matchRegex);

    if (add[0])
      add.forEach((v, k, i) => {
        let match = v.match(matchRegex);
        // console.log("add",match)
		if (match === null) return;
        switch (true) {
          case foal.genes.includes(match[2] + match[2]): // foal has dom
            // console.log("Foal already has dominant gene",match[2]+match[2])
            break;
          case foal.genes.includes("n" + match[2]): // foal has rec
            // console.log("Foal now has dominant gene",match[2]+match[2])
            let fgenes = foal.genes;
            fgenes[fgenes.indexOf("n" + match[2])] = match[2] + match[2];
            foal.genes = fgenes;
            break;
          default: // foal doesn't have this gene, input dom
            foal.addGene(match[0]);
        }
      });

    if (rmv[0])
      rmv.forEach((v, k, i) => {
        let match = v.match(matchRegex);
        // console.log(foal.genes, "rmv", match[2])
		if (match === null) return;
        switch (true) {
          case foal.genes.includes(match[2] + match[2]): // foal has dom
		  	console.log('dom remove');
			let fgenes = foal.genes;
			if (match[0] === `n${match[2]}`) fgenes[fgenes.indexOf(match[2] + match[2])] = "n" + match[2];
			else fgenes.splice(fgenes.indexOf(match[2] + match[2]), 1);
            foal.genes = fgenes;
            break;
          case foal.genes.includes("n" + match[2]): // foal has rec
		    console.log('foal has rec ' + match[2]);
		    console.log(foal.genes);
		  	let fgenes1 = foal.genes;
            fgenes1.splice(fgenes1.indexOf("n" + match[2]), 1);
            foal.genes = fgenes1;
		    console.log(foal.genes);
            break;
          default: // foal doesn't have this gene
            // n/a
        }
      });

	// add+remove anomalies
	let anomalyDictionary = [];
	for (let i = 0; i < this.anomalyData.length; i++) {
		anomalyDictionary.push(this.anomalyData[i][2]);
	};
	// console.log(anomalyDictionary);

	const anomalyMatchRegex = new RegExp(`\\b(${anomalyDictionary.join('|')})\\b`);

	if (add[0])
      add.forEach((v, k, i) => {
        let match = v.match(anomalyMatchRegex);
        console.log("add",match)
		if (match === null) return;
        switch (true) {
          case foal.genes.includes(match[0]): // foal already has anomaly
            break;
          default: // foal doesn't have this gene, add gene
            foal.addGene(match[0]);
        }
      });

    if (rmv[0])
      rmv.forEach((v, k, i) => {
        let match = v.match(anomalyMatchRegex);
        // console.log(foal.genes, "rmv", match[2])
		if (match === null) return;
        switch (true) {
          case foal.genes.includes(match[0] + match[0]): // foal has dom
		  	// console.log('dom remove');
			let fgenes = foal.genes;
			fgenes[fgenes.indexOf(match[0] + match[0])] = match[0];
			foal.genes = fgenes;
            break;
          case foal.genes.includes(match[0]): // foal has rec
		  	let fgenes1 = foal.genes;
            fgenes1.splice(fgenes1.indexOf(match[0]), 1);
            foal.genes = fgenes1;
            break;
          default: // foal doesn't have this gene
            // n/a
        }
	});
	
  },

  // ======================================================================
  // event handlers

  // called on arena UI build
  built: function (ev) {
    // 'this' is ui state - nord.state.breeding
    try {
      // console.log("breeding built");
      this.form = rzl.findChild(this.rootNode, "form", "breeding-form");
      this.fields = rzl.getFormFields(this.form);
      this.output = rzl.findChild(this.rootNode, "div", "output");
      this.breed = { stats: {} };

      ["pattern", "potion"].forEach((t) => {
        ["sire", "dam"].forEach((h) => {
          ["1", "2"].forEach((n) => {
            rzl.setSelOpts(this.fields[h + t + n], nord.breeding[t + "Data"]);
          });
        });
      });

      let traitmods = [
        ...nord.breeding.traitData,
        "Mimicry",
        "Twins",
        "Random (exc)",
        "Random (inc)",
      ];
      rzl.setSelOpts(this.fields.traitmod, traitmods);
      // this.fields.traitmod.size = arr.length;

      const seasonmods = nord.breeding.mutationData.breedable.map(
        (arr) => arr[0]
      );
      rzl.setSelOpts(this.fields.seasonmod, seasonmods);

      // this.fields.siregeno.value = "ee aa";
      // this.fields.damgeno.value = "ee aa";
    } catch (e) {
      console.error(e);
      return;
    }
  },

  // click handler for breed button
  breedClick: function (ev) {
    //'this' is button
    nord.breeding.breed();
  },

  infoClick: function (ev) {
    console.log("info");
    new rzl.Modal(0, { blueprint: nord.breeding.blueprints.appyinfo });
  },

  // update form based on geno update
  genoUpdated: function (ev) {
    const fields = nord.state.breeding.fields,
      horse = ev.target.id.slice(0, -4);

    switch (true) {
      case ev.target.value.includes("LpLp"):
        fields[horse + "pattern1"].disabled = false;
        fields[horse + "pattern2"].disabled = false;
        break;
      case ev.target.value.includes("nLp"):
        fields[horse + "pattern1"].disabled = false;
        fields[horse + "pattern2"].disabled = true;
        fields[horse + "pattern1"].selectedIndex = 0;
        break;
      default:
        fields[horse + "pattern1"].disabled = true;
        fields[horse + "pattern2"].disabled = true;
        fields[horse + "pattern1"].selectedIndex = 0;
        fields[horse + "pattern2"].selectedIndex = 0;
    }
  },

  // update form based on modifier select
  modifierChanged: function (ev) {
    const fields = nord.state.breeding.fields;
    switch (ev.target.selectedIndex) {
      case 0: // none
        fields.genemodadd.disabled = true;
        fields.genemodadd.hidden = true;
        fields.genemodadd.value = "";
        fields.genemodrmv.disabled = true;
        fields.genemodrmv.hidden = true;
        fields.genemodrmv.value = "";
        break;
      case 1: // add
        fields.genemodadd.disabled = false;
        fields.genemodadd.hidden = false;
        fields.genemodrmv.disabled = true;
        fields.genemodrmv.hidden = true;
        fields.genemodrmv.value = "";
        break;
      case 2: // remove
        fields.genemodadd.disabled = true;
        fields.genemodadd.hidden = true;
        fields.genemodadd.value = "";
        fields.genemodrmv.disabled = false;
        fields.genemodrmv.hidden = false;
        break;
      case 3: // add + remove
        fields.genemodadd.disabled = false;
        fields.genemodadd.hidden = false;
        fields.genemodrmv.disabled = false;
        fields.genemodrmv.hidden = false;
        break;
    }
  },

  // modify traits based on select field
  traitsChanged: function (ev) {
    const state = nord.state.breeding,
      breed = state.breed;

    breed.traitmod = [...state.fields.traitmod.selectedOptions].map(
      (v) => v.value
    );
  },

  //=======================================================================
  // SECTION: Definitions
  uiDef: {
    meta: {
      name: "breeding",
      domain: "nord",
      pnode: "norduiBox",
      builtCB: "nord.breeding.built",
    },
    view: {
      style: {
        // "width":"80vw",
        margin: "auto",
        display: "flex",
        "flex-flow": "column nowrap",
        "align-items": "center",
      },
      children: [
        { tag: "h1", class: "title", content: "Breeding Tool" },
        {
          tag: "form",
          id: "breeding-form",
          class: "rzl-form",
          children: [
            {
              class: "rzl-form-row",
              children: [
                {
                  class: "rzl-form-item",
                  children: [
                    {
                      tag: "label",
                      content: "Sire:",
                      props: { for: "siregeno" },
                    },
                    {
                      tag: "input",
                      id: "siregeno",
                      props: { type: "text", placeholder: "Genotype" },
                      events: { keyup: "nord.breeding.genoUpdated" },
                    },
                  ],
                },
                {
                  class: "rzl-form-item",
                  children: [
                    {
                      tag: "select",
                      class: "itemWidth",
                      id: "sirepattern1",
                      props: { disabled: true },
                    },
                    {
                      tag: "select",
                      class: "itemWidth",
                      id: "sirepattern2",
                      props: { disabled: true },
                    },
                    {
                      class: "appyinfo btn",
                      children: [
                        { class: "iconify icon:ion:help-circle-outline" },
                      ],
                      events: { click: "nord.breeding.infoClick" },
                    },
                  ],
                },
                {
                  class: "rzl-form-item",
                  children: [
                    { tag: "select", class: "itemWidth", id: "sirepotion1" },
                    { tag: "select", class: "itemWidth", id: "sirepotion2" },
                  ],
                },
              ],
            },
            {
              class: "rzl-form-row",
              children: [
                {
                  class: "rzl-form-item",
                  children: [
                    {
                      tag: "label",
                      content: "Dam :",
                      props: { for: "damgeno" },
                    },
                    {
                      tag: "input",
                      id: "damgeno",
                      props: { type: "text", placeholder: "Genotype" },
                      events: { keyup: "nord.breeding.genoUpdated" },
                    },
                  ],
                },
                {
                  class: "rzl-form-item",
                  children: [
                    {
                      tag: "select",
                      class: "itemWidth",
                      id: "dampattern1",
                      props: { disabled: true },
                    },
                    {
                      tag: "select",
                      class: "itemWidth",
                      id: "dampattern2",
                      props: { disabled: true },
                    },
                    {
                      class: "appyinfo btn",
                      children: [
                        { class: "iconify icon:ion:help-circle-outline" },
                      ],
                      events: { click: "nord.breeding.infoClick" },
                    },
                  ],
                },
                {
                  class: "rzl-form-item",
                  children: [
                    { tag: "select", class: "itemWidth", id: "dampotion1" },
                    { tag: "select", class: "itemWidth", id: "dampotion2" },
                  ],
                },
              ],
            },
            {
              class: "rzl-form-row",
              children: [
                {
                  class: "rzl-form-item",
                  children: [
                    {
                      tag: "label",
                      content: "Luck Potion:",
                      props: { for: "luck" },
                    },
                    {
                      tag: "input",
                      id: "luck",
                      props: { type: "checkbox" },
                    },
                  ],
                },
                {
                  class: "rzl-form-item",
                  children: [
                    {
                      tag: "label",
                      content: "Traits:",
                      props: { for: "traitmod" },
                    },
                    {
                      tag: "select",
                      id: "traitmod",
                      props: { multiple: true, size: 2 },
                      events: {
                        change: "nord.breeding.traitsChanged",
                      },
                    },
                  ],
                },
                {
                  class: "rzl-form-item",
                  children: [
                    {
                      tag: "label",
                      content: "Genes:",
                      props: { for: "genemod" },
                    },
                    // {tag:"select",id:"genemod",props:{multiple:true},children:[
                    {
                      tag: "select",
                      id: "genemod",
                      children: [
                        { tag: "option", content: "None" },
                        { tag: "option", content: "Add" },
                        { tag: "option", content: "Remove" },
                        { tag: "option", content: "Add+Remove" },
                      ],
                      events: {
                        change: "nord.breeding.modifierChanged",
                      },
                    },
                    {
                      tag: "input",
                      id: "genemodadd",
                      props: {
                        type: "text",
                        disabled: true,
                        hidden: true,
                        placeholder: "Add",
                      },
                    },
                    {
                      tag: "input",
                      id: "genemodrmv",
                      props: {
                        type: "text",
                        disabled: true,
                        hidden: true,
                        placeholder: "Remove",
                      },
                    },
                  ],
                },
                {
                  class: "rzl-form-item",
                  children: [
                    {
                      tag: "label",
                      content: "Seasonal:",
                      props: { for: "seasonmod" },
                    },
                    {
                      tag: "select",
                      id: "seasonmod",
                      props: { multiple: true, size: 2 },
                    },
                  ],
                },
              ],
            },
            {
              class: "rzl-form-row",
              children: [
                {
                  tag: "button",
                  id: "btnBreeding",
                  class: "rzl-btn",
                  content: "Breed",
                  events: {
                    click: "nord.breeding.breedClick",
                  },
                  props: { type: "button" },
                },
              ],
            },
          ],
        },
        {
          id: "output",
          class: "rzl-hidden",
          style: { "text-align": "center" },
        },
        {
          id: "statsout",
          class: "rzl-hidden",
          style: { "text-align": "center" },
        },
      ],
    },
  },

  blueprints: {
    appyinfo: {
      meta: {
        name: "appyinfo",
      },
      view: {
        children: [
          { tag: "h2", content: "LpLp and nLp" },
          {
            tag: "table",
            children: [
              {
                tag: "tr",
                children: [
                  { tag: "th", content: "Combo" },
                  { tag: "th", content: "LpLp" },
                  { tag: "th", content: "nLp" },
                ],
              },
              {
                tag: "tr",
                children: [
                  { tag: "td", content: "Leopard" },
                  { tag: "td", content: "patn1patn1" },
                  { tag: "td", content: "patn1" },
                ],
              },
              {
                tag: "tr",
                children: [
                  { tag: "td", content: "Spotted Blanket" },
                  { tag: "td", content: "patn2patn2" },
                  { tag: "td", content: "patn2" },
                ],
              },
              {
                tag: "tr",
                children: [
                  { tag: "td", content: "Varnish Roan" },
                  { tag: "td", content: "varnvarn" },
                  { tag: "td", content: "varn" },
                ],
              },
              {
                tag: "tr",
                children: [
                  { tag: "td", content: "Snowflake" },
                  { tag: "td", content: "snowsnow" },
                  { tag: "td", content: "snow" },
                ],
              },
              {
                tag: "tr",
                children: [
                  { tag: "td", content: "Frosted" },
                  { tag: "td", content: "frostfrost" },
                  { tag: "td", content: "frost" },
                ],
              },
              {
                tag: "tr",
                children: [
                  { tag: "td", content: "Snowfall" },
                  { tag: "td", content: "fallfall" },
                  { tag: "td", content: "fall" },
                ],
              },
            ],
          },
          { tag: "h2", content: "Semi-Leopard" },
          { tag: "p", content: "LpLp with two different leopard types" },
        ],
      },
    },
  },
};
