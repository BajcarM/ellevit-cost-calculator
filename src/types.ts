export enum EActiveTab {
  ODPB = 'odpb',
  LIGHT = 'light',
  LIGHTP = 'light_p',
  LIGHTNP = 'light_np',
}

export type FormShape = {
  jmeno: string;
  prijmeni: string;
  fasada: number;
  strecha: number;
  puda: number;
  podlaha: number;
  sklep: number;
  stena: number;
  dvere: number;
  okna: number;
  stineni: number;
  solary: string;
  infigy: boolean;
  tigo: boolean;
  vytapeni: string;
  rekuperaceVody: boolean;
  podlahoveVytapeni: boolean;
  podlahoveVytapeniPlocha:number;
  rekuperaceVzduchu: string;
  rekuperaceVzduchuMnozstvi: number;
  destovka: string;
  nabijeciStanice: boolean;
  kombinacniBonus: number;
  detiPlna: number;
  detiPolovina: number;
  obec: boolean;
  // costClientA: number;
  dotaceOblastA: number;
  // costClientC: number;
  dotaceOblastC: number;
  // costClientD: number;
  dotaceOblastD: number;
  dotaceTotal: number;
  costTotal: number;
  costTotalClient: number;
  monthlyPayment: number;
  addProjectCost: boolean;
  customCost: number;

};
