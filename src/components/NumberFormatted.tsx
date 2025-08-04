import { NumericFormat, NumericFormatProps } from 'react-number-format';

export const NumberFormatted = (props: NumericFormatProps) => (
  <NumericFormat displayType="text" thousandSeparator="." decimalSeparator="," {...props} />
);
