import { StyleSheet, Font } from '@react-pdf/renderer';
import { EColors } from '../../assets/SiteValues';
import KanitRegular from '../../assets/fonts/kanit/Kanit-Regular.ttf';
import RobotoRegular from '../../assets/fonts/roboto/Roboto-Regular.ttf';
import RobotoBold from '../../assets/fonts/roboto/Roboto-Bold.ttf';
import RobotoItalic from '../../assets/fonts/roboto/Roboto-Italic.ttf';
import RobotoBoldItalic from '../../assets/fonts/roboto/Roboto-BoldItalic.ttf';

Font.register({
  family: 'Roboto',
  fonts: [
    { src: RobotoRegular, fontWeight: 'normal', fontStyle: 'normal' },
    { src: RobotoBold, fontWeight: 'bold', fontStyle: 'normal' },
    { src: RobotoItalic, fontWeight: 'normal', fontStyle: 'italic' },
    { src: RobotoBoldItalic, fontWeight: 'bold', fontStyle: 'italic' },
  ],
});

Font.register({
  family: 'Kanit',
  fonts: [{ src: KanitRegular, fontWeight: 'normal' }],
});

export const styles = StyleSheet.create({
  page: {
    fontFamily: 'Roboto',
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 2,
  },
  column: {
    flexDirection: 'column',
    flex: 1,
  },
  header1: {
    fontFamily: 'Kanit',
    letterSpacing: 1.1,
    fontSize: 20,
    fontWeight: 600,
    textAlign: 'center',
  },
  header2: {
    fontSize: 14,
    fontWeight: 500,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 10,
    color: '#998E8E',
    textAlign: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: 400,
  },
  textRight: {
    textAlign: 'right',
  },
  box: {
    border: 1,
    borderColor: EColors.primary,
    borderRadius: 8,
    minHeight: 18,
  },
  boldText: {
    fontSize: 12,
    fontWeight: 500,
    marginBottom: 4,
  },
  bigNumber: {
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  mbSmall: {
    marginBottom: 5,
  },
  mbMedium: {
    marginBottom: 10,
  },
  mtMedium: {
    marginTop: 10,
  },
  mtLarge: {
    marginTop: 20,
  },
  mlFull: {
    marginLeft: 'auto',
  },
  paddingSmall: {
    padding: '5 10',
  },
  paddingMedium: {
    padding: '10 20',
  },
  paddingInlineSmall: {
    padding: '0 5',
  },
  width70: {
    width: 70,
  },
  width200: {
    width: 180,
    // maxWidth: 180,
    flexGrow: 0,
  },
  width100: {
    width: 140,
    // maxWidth: 140,
    flexGrow: 0,
  },
  bold: {
    fontWeight: 700,
  },
  companySlogan: {
    fontSize: 10,
    color: EColors.primary,
    textAlign: 'center',
    opacity: 0.3,
    letterSpacing: 2.2,
  },
  logo: {
    width: 130,
    height: 60,
    position: 'absolute',
    left: 20,
    top: 20,
    objectFit: 'contain',
    objectPosition: 'center',
  },
  flex1: {
    flex: 1,
  },
  calculation: {
    fontSize: 10,
    textAlign: 'right',
  },
  title: {
    color: EColors.primary,
  },
});
