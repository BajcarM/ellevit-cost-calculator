import React, { ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import { NumericFormat } from 'react-number-format';

interface NumberInputProps {
  value: string | number;
  name: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  suffix?: string;
  readOnly?: boolean;
  allowNegative?: boolean;
}

const NumberInput: React.FC<NumberInputProps> = ({
  value,
  name,
  label,
  onChange,
  placeholder,
  suffix,
  readOnly,
  allowNegative = false,
}) => {
  return (
    <NumericFormat
      value={value || ''}
      onValueChange={(values) => {
        const numericValue = values.value.replace(/^0+/, '') || '0';

        const fakeEvent = {
          target: {
            name,
            value: numericValue,
          },
        } as ChangeEvent<HTMLInputElement>; // Type assertion
        onChange(fakeEvent); // Call handleInputChange
      }}
      valueIsNumericString
      thousandSeparator="." // Formats number as "000.000"
      decimalSeparator=","
      allowNegative={allowNegative} // Prevents negative numbers
      decimalScale={0} // No decimals allowed
      customInput={TextField}
      slotProps={{ input: { readOnly } }}
      type="text"
      label={label}
      variant="outlined"
      fullWidth
      name={name}
      placeholder={placeholder}
      suffix={suffix}
    />
  );
};

export default NumberInput;
