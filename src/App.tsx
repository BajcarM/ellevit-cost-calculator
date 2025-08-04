import { useState } from 'react';
import { Container, Grid, Button } from '@mui/material';
import { FormView } from './components/FormView';
import { EActiveTab, FormShape } from './types';
// import { PDFViewer } from '@react-pdf/renderer';
// import { PrintPdf } from './components/PrintPdf/PrintPdf';

function App() {
  const [activeTab, setActiveTab] = useState(EActiveTab.ODPB);

  const [formValues, setformValues] = useState<FormShape>({
    jmeno: '',
    prijmeni: '',
    fasada: 0,
    strecha: 0,
    puda: 0,
    podlaha: 0,
    sklep: 0,
    stena: 0,
    dvere: 0,
    okna: 0,
    stineni: 0,
    solary: '',
    infigy: false,
    tigo: false,
    vytapeni: '',
    rekuperaceVody: false,
    podlahoveVytapeni: false,
    podlahoveVytapeniPlocha: 0,
    rekuperaceVzduchu: '',
    rekuperaceVzduchuMnozstvi: 0,
    destovka: '',
    nabijeciStanice: false,
    kombinacniBonus: 0,
    detiPlna: 0,
    detiPolovina: 0,
    obec: false,
    // costClientA: 0,
    dotaceOblastA: 0,
    // costClientC: 0,
    dotaceOblastC: 0,
    // costClientD: 0,
    dotaceOblastD: 0,
    dotaceTotal: 0,
    costTotal: 0,
    costTotalClient: 0,
    monthlyPayment: 0,
    addProjectCost: false,
    customCost: 0,
  });
  const tabOptions = [
    { label: 'ODPB', value: EActiveTab.ODPB },
    { label: 'LIGHT', value: EActiveTab.LIGHT },
    { label: 'Památky', value: EActiveTab.LIGHTP },
    { label: 'Nízkopříjmoví', value: EActiveTab.LIGHTNP },
  ];
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} mt={2}>
          <Grid container spacing={1}>
            {tabOptions.map(({ value, label }) => (
              <Grid item xs={6} sm={3} key={value}>
                <Button
                  size="large"
                  variant={activeTab === value ? 'contained' : 'outlined'}
                  color="primary"
                  onClick={() => setActiveTab(value)}
                  fullWidth
                >
                  {label}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} mt={2}>
          <FormView formValues={formValues} setformValues={setformValues} activeTab={activeTab} />
        </Grid>

        {/* <Grid item xs={12}>
          <PDFViewer width="100%" height={1200}>
            <PrintPdf formValues={formValues} activeTab={activeTab} />
          </PDFViewer>
        </Grid> */}
      </Grid>
    </Container>
  );
}

export default App;
