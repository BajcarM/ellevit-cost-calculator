import { EActiveTab, FormShape } from '../types';
import { CalculationSets, CalculationCommon } from './Constants';
import { destovkaOptions, solaryOptions, vytapeniOptions, rekuperaceVzdOptions } from './options';

export const calculateSubsidy = (formValues: FormShape, activeTab: EActiveTab) => {
  const newFormValues = { ...formValues };
  const CS = CalculationSets[activeTab];
  const CC = CalculationCommon;
  // Oblast A
  const facadeArea = formValues.fasada || 0;
  const roofArea = formValues.strecha || 0;
  const pudaArea = formValues.puda || 0;
  const floorArea = formValues.podlaha || 0;
  const sklepArea = formValues.sklep || 0;
  const stenaArea = formValues.stena || 0;
  const windowArea = formValues.okna || 0;
  const dvereArea = formValues.dvere || 0;
  const shadingArea = formValues.stineni || 0;

  const areaTotalCost =
    (pudaArea + sklepArea + stenaArea) * CC.cost_stena +
    roofArea * CC.cost_strecha +
    facadeArea * CC.cost_fasada +
    floorArea * CC.cost_podlaha +
    windowArea * CC.cost_okna +
    dvereArea * CC.cost_dvere +
    shadingArea * CC.cost_stineni;

  const areaSubsidyRaw =
    (pudaArea + sklepArea + stenaArea) * CS.dotace_stena +
    (roofArea + facadeArea) * CS.dotace_strecha +
    floorArea * CS.dotace_podlaha +
    (windowArea + dvereArea) * CS.dotace_okna +
    shadingArea * CS.dotace_stineni +
    (formValues.addProjectCost ? CS.dotace_projekt : 0);

  const areaSubsidy = Math.min(areaSubsidyRaw, CS.maxDotace);
  // const areaCostClient = areaTotalCost - areaSubsidyRaw;

  // Oblast C
  //Voda
  const rekuperaceVodyTotalCost = formValues.rekuperaceVody ? CC.cost_rekuperaceVoda : 0;
  const rekuperaceVodyDotace = formValues.rekuperaceVody ? CC.dotace_rekuperaceVoda : 0;

  //Solary
  const solarySelectedOption = solaryOptions.find((option) => option.value === formValues.solary);
  const countTigo = formValues.tigo && formValues.solary;
  const tigoCost = countTigo ? solarySelectedOption?.tigoCost ?? 0 : 0;
  const solaryTotalCost = (solarySelectedOption?.cost ?? 0) + tigoCost;
  const solaryDotace = formValues.solary ? CC.dotace_solary : 0;
  const wallBoxUnitCost = formValues.nabijeciStanice ? CC.cost_nabijeciStanice : 0;
  const infigyDotace = formValues.infigy ? CC.dotace_infigy : 0;
  const infigyTotalCostCost = formValues.infigy ? CC.cost_infigy : 0;

  //Vzduch
  const rekuperaceVzdSelectedOption = rekuperaceVzdOptions.find(
    ({ value }) => value === formValues.rekuperaceVzduchu
  );
  const rekuperaceVzduchuUnitCost = rekuperaceVzdSelectedOption?.cost ?? 0;
  const rekuperaceVzduchuDotace =
    formValues.rekuperaceVzduchu && formValues.rekuperaceVzduchuMnozstvi
      ? CC.dotace_rekuperaceVzduch
      : 0;
  const rekuperceVzduchuUnits = formValues.rekuperaceVzduchuMnozstvi ?? 0;
  const rekuperaceVzduchuTotalCost = rekuperaceVzduchuUnitCost * rekuperceVzduchuUnits;
  const rekuperaceVzduchuCostClient = Math.max(
    rekuperaceVzduchuTotalCost - rekuperaceVzduchuDotace,
    0
  );
  //Podlahove Topeni
  const podlahoveVytapeniCostClient =
    formValues.podlahoveVytapeni && formValues.podlahoveVytapeniPlocha
      ? CC.cost_podlahoveVytapeni * formValues.podlahoveVytapeniPlocha
      : 0;

  //Vytapeni
  const vytapeniSelectedOption = vytapeniOptions.find(({ value }) => value === formValues.vytapeni);
  const vytapeniTotalCost = vytapeniSelectedOption?.cost ?? 0;
  const vytapeniDotace = vytapeniSelectedOption?.subsidy ?? 0;

  // const rekuperaceVodyCostClient = rekuperaceVodyTotalCost - rekuperaceVodyDotace;
  // const solaryCostClient = solaryTotalCost - solaryDotace;
  // const wallBoxCostClient = wallBoxUnitCost;
  // const vytapeniCostClient = vytapeniTotalCost - vytapeniDotace;

  // const costClientC =
  //   rekuperaceVodyCostClient +
  //   rekuperaceVzduchuCostClient +
  //   solaryCostClient +
  //   wallBoxCostClient +
  //   vytapeniCostClient +
  //   podlahoveVytapeniCostClient+
  //   infigyTotalCostCost;

  const dotaceC =
    rekuperaceVodyDotace + rekuperaceVzduchuDotace + solaryDotace + vytapeniDotace + infigyDotace;

  const costTotalC =
    rekuperaceVodyTotalCost +
    rekuperaceVzduchuTotalCost +
    solaryTotalCost +
    wallBoxUnitCost +
    vytapeniTotalCost +
    podlahoveVytapeniCostClient +
    infigyTotalCostCost;

  // Oblast D
  const destovkaSelectedOption = destovkaOptions.find(({ value }) => value === formValues.destovka);

  const destovkaTotalCost = destovkaSelectedOption?.cost ?? 0;
  const destovkaDotace =
    (destovkaSelectedOption?.subsidy ?? 0) +
    (destovkaSelectedOption?.cost ? CC.dotace_destovka : 0);
  // const destovkaCostClient = destovkaTotalCost - destovkaDotace;

  const kombinacniBonus =
    (areaTotalCost && vytapeniTotalCost ? CS.bonus_kombinace : 0) +
    (areaTotalCost && (solaryTotalCost || rekuperaceVodyTotalCost || rekuperaceVzduchuCostClient)
      ? CS.bonus_kombinace
      : 0);

  const bonusDeti =
    (formValues?.detiPlna ?? 0) * CS.bonus_deti +
    ((formValues?.detiPolovina ?? 0) * CS.bonus_deti) / 2;

  // Update hodnot
  const minimalCostTotal = 0;
  const minimalDotace = 0;

  // newFormValues.costClientA = areaCostClient;
  // newFormValues.costClientC = costClientC;
  // newFormValues.costClientD = destovkaCostClient;

  newFormValues.dotaceOblastA = areaSubsidy;
  newFormValues.dotaceOblastC = dotaceC;
  newFormValues.dotaceOblastD = destovkaDotace;

  newFormValues.kombinacniBonus = kombinacniBonus;

  const totalDotace = Math.max(
    (areaSubsidy + dotaceC + destovkaDotace) * (formValues.obec ? 1.05 : 1) +
      bonusDeti +
      kombinacniBonus,
    minimalDotace
  );
  const totalCost = Math.max(
    (areaTotalCost + costTotalC + destovkaTotalCost) * 1 +
      (formValues.addProjectCost ? CS.cost_projekt : 0) +
      formValues.customCost,
    minimalCostTotal
  );

  const totalCostClient = Math.max(totalCost - totalDotace, 0);

  newFormValues.costTotalClient = Math.round(totalCostClient);
  newFormValues.dotaceTotal = Math.round(totalDotace);
  newFormValues.costTotal = Math.round(totalCost);

  newFormValues.monthlyPayment = calculateMonthlyPayment(newFormValues);

  return newFormValues;
};

const calculateMonthlyPayment = ({ costTotalClient }: FormShape) => {
  const loanAmount = costTotalClient;
  const interestRate = 0.0299 / 12;
  const duration = 25;
  const totalPayments = duration * 12;

  let monthlyPayment = 0;

  if (loanAmount > 0) {
    monthlyPayment =
      (loanAmount * interestRate * Math.pow(1 + interestRate, totalPayments)) /
      (Math.pow(1 + interestRate, totalPayments) - 1);
  }

  return Math.round(monthlyPayment);
};

export const formatNumber = (value: unknown): string => {
  const num = Number(value);

  if (isNaN(num)) {
    return '';
  } else {
    return (
      num.toLocaleString('de-DE', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }) + ',-'
    );
  }
};

export const formatArea = (value: unknown): string => {
  const num = Number(value);

  if (isNaN(num)) {
    return '';
  } else {
    return num.toString() + ' m²';
  }
};
