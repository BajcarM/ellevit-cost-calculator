export const CalculationCommon = {
  //Oblast A
  cost_stena: 1500, // stena, sklep, puda
  cost_strecha: 2600,
  cost_fasada: 2300,
  cost_podlaha: 3400,
  cost_okna: 9800,
  cost_dvere: 20000,
  cost_stineni: 7500,

  //Oblast C
  cost_rekuperaceVoda: 130000,
  dotace_rekuperaceVoda: 50000,

  dotace_solary: 100000,

  cost_nabijeciStanice: 22000,
  dotace_infigy: 40000,
  cost_infigy: 21000,
  dotace_rekuperaceVzduch: 90000,
  cost_podlahoveVytapeni: 900,

  //Oblast D
  dotace_destovka: 20000,
};

export const CalculationSets = {
  odpb: {
    pdf_titul: 'NZÚ Oprav dům po babičce',
    //Oblast A
    dotace_stena: 500, // stena, sklep, puda
    dotace_strecha: 1300, // strecha, fasada
    dotace_podlaha: 1700,
    dotace_okna: 4900, // okna, dvere
    dotace_stineni: 1500,

    maxDotace: 1000000,

    bonus_kombinace: 50000,
    bonus_deti: 50000,

    cost_projekt: 100000,
    dotace_projekt: 50000,
    platby: [
      'Platba č.1 je 50.000, která slouží jako záloha na dotační management, který stojí celkem 100.000,- a je splatná do 5 dnů od podpisu smlouvy. Druhá část je uznatelný náklad v celkové dotaci.',
      'Platba č.2 se účtuje tehdy, kdy Vám přijde dotace na účet, kterou budeme chtít zaslat jako zálohu za dílo. Následně se domluví termín a harmonogram realizace a začínáme s rekonstrukcí.',
      'Platba č.3 bude doplatek celé ceny díla z vlastních zdrojů či financování, který budeme účtovat ve chvíli, kdy se budeme blížit k půlce realizace (dle harmonogramu) a realizaci dokončujeme.',
    ],
    management: [
      'Technické zaměření projektantem',
      'Projektová dokumentace původního a budoucího stavu',
      'Upřesnění rozpočtu',
      'Technická zpráva',
      'Energetické hodnocení',
      'Energetický šítek pro stávající a budoucí stav',
      'Vyřízení a podání žádosti na dotaci',
      'Vyhotovení zprávy technického odborného dozoru stavby po dokončení stavby pro účely dotace NZÚ',
      'Dokončení žádosti NZU po realizaci opatření (kontrola účetnictví k akci a doložení dalších potřebných dokumentů na fond) pro NZÚ',
    ],
  },
  light: {
    pdf_titul: 'NZÚ Light',
    //Oblast A
    dotace_stena: 300,
    dotace_strecha: 700,
    dotace_podlaha: 800,
    dotace_okna: 2200,
    dotace_stineni: 1500,

    maxDotace: 500000,

    bonus_kombinace: 30000,
    bonus_deti: 0,

    cost_projekt: 30000,
    dotace_projekt: 0,
    platby: [
      'Platba č.1 je 30.000, která slouží na vyřízení dotace NZU Light a je splatná do 5 dnů od podpisu smlouvy. Druhá část je uznatelný náklad v celkové dotaci.',
      'Platba č.2 se účtuje tehdy, kdy Vám přijde dotace na účet, kterou budeme chtít zaslat jako zálohu za dílo. Následně se domluví termín a harmonogram realizace a začínáme s rekonstrukcí.',
      'Platba č.3 bude doplatek celé ceny díla z vlastních zdrojů či financování, který budeme účtovat ve chvíli, kdy se budeme blížit k půlce realizace (dle harmonogramu) a realizaci dokončujeme.',
    ],
    management: [
      'zpráva o navrhovaných opatřeních + fotodokumentace plánovaných prací',
      'odborný posudek a zpráva o provedené realizaci + případná měření (průvzdušnosti)',
      'po skončení prací – závěrečná zpráva, fotodokumentace, případná měření a protokoly',
    ],
  },
  light_np: {
    pdf_titul: 'NZÚ Light pro nízkopříjmové',
    //Oblast A
    dotace_stena: 750,
    dotace_strecha: 1500,
    dotace_podlaha: 2000,
    dotace_okna: 5500,
    dotace_stineni: 1500,

    maxDotace: 250000,

    bonus_kombinace: 30000,
    bonus_deti: 0,

    cost_projekt: 0,
    dotace_projekt: 0,
    platby: [
      'Platba č.1 se účtuje tehdy, kdy Vám přijde dotace na účet, kterou budeme chtít zaslat jako zálohu za dílo a je splatná do 5 dnů od přijetí dotace. Následně se domluví termín a harmonogram realizace a začínáme s rekonstrukcí.',
      'Platba č.2 bude doplatek celé ceny díla z vlastních zdrojů či financování, který budeme účtovat ve chvíli, kdy se budeme blížit k půlce realizace (dle harmonogramu) a realizaci dokončujeme.',
    ],
    management: [
      'zpráva o navrhovaných opatřeních + fotodokumentace plánovaných prací',
      'odborný posudek a zpráva o provedené realizaci + případná měření (průvzdušnosti)',
      'po skončení prací – závěrečná zpráva, fotodokumentace, případná měření a protokoly',
    ],
  },
  light_p: {
    pdf_titul: 'NZÚ Light pro památky',
    //Oblast A
    dotace_stena: 500,
    dotace_strecha: 800,
    dotace_podlaha: 1050,
    dotace_okna: 4900,
    dotace_stineni: 1500,

    maxDotace: 500000,

    bonus_kombinace: 30000,
    bonus_deti: 0,

    cost_projekt: 30000,
    dotace_projekt: 0,
    platby: [
      'Platba č.1 je 30.000, která slouží na vyřízení dotace NZU Light a je splatná do 5 dnů od podpisu smlouvy. Druhá část je uznatelný náklad v celkové dotaci.',
      'Platba č.2 se účtuje tehdy, kdy Vám přijde dotace na účet, kterou budeme chtít zaslat jako zálohu za dílo. Následně se domluví termín a harmonogram realizace a začínáme s rekonstrukcí.',
      'Platba č.3 bude doplatek celé ceny díla z vlastních zdrojů či financování, který budeme účtovat ve chvíli, kdy se budeme blížit k půlce realizace (dle harmonogramu) a realizaci dokončujeme.',
    ],
    management: [
      'zpráva o navrhovaných opatřeních + fotodokumentace plánovaných prací',
      'odborný posudek a zpráva o provedené realizaci + případná měření (průvzdušnosti)',
      'po skončení prací – závěrečná zpráva, fotodokumentace, případná měření a protokoly',
    ],
  },
};
