import { Button } from '@mui/material';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { PrintPdf, PrintPdfProps } from './PrintPdf';
import { FC } from 'react';

type PrintPdfButtonProps = PrintPdfProps;

export const PrintPdfButton: FC<PrintPdfButtonProps> = ({ formValues, activeTab }) => {
  const fileName =
    formValues.jmeno && formValues.prijmeni
      ? `${formValues.jmeno}-${formValues.prijmeni}.pdf`
      : 'nabidka.pdf';

  return (
    <PDFDownloadLink
      document={<PrintPdf formValues={formValues} activeTab={activeTab} />}
      fileName={fileName}
    >
      {/* @ts-expect-error TODO mozna elegantneji upravit */}
      {({ loading }) => (
        <Button type="button" variant="contained" color="primary" fullWidth size="large">
          {loading ? 'Generování PDF...' : '📄 Stáhnout PDF'}
        </Button>
      )}
    </PDFDownloadLink>
  );
};
