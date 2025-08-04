import { outlinedInputClasses } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { EColors } from '../assets/SiteValues';

// 🎨 Define Global Theme
const theme = createTheme({
  palette: {
    primary: {
      main: EColors.primary, // Default primary color
    },
    secondary: {
      main: EColors.secondary, // Default secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h6: {
      fontWeight: 600, // Default style for h6
    },
  },
  components: {
    // Default styles for buttons
    MuiButton: {
      defaultProps: {
        variant: 'contained', // All buttons will be "contained" by default
        color: 'primary',
      },
      styleOverrides: {
        root: {
          textTransform: 'none', // Prevents uppercase text
          borderRadius: 8,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: '8px !important',
          border: `1px solid ${theme.palette.primary.main}`,
          color: theme.palette.primary.main,
          textTransform: 'none',
          fontWeight: 500,
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            boxShadow:
              '0px 3px 1px -2px rgba(0, 0, 0, 0.2),' +
              '0px 2px 2px 0px rgba(0, 0, 0, 0.14),' +
              '0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            },
          },
        }),
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        grouped: {
          margin: 0,
          marginLeft: 16,
          marginTop: 16,
          border: `1px solid ${EColors.primary}`,
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
      },
    },
    // Default styles for text fields
    MuiTextField: {
      defaultProps: {
        variant: 'outlined', // All text fields will be "outlined" by default
        fullWidth: true,
        size: 'small',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        notched: true,
      },
      styleOverrides: {
        input: {
          '&::placeholder': {
            fontSize: '0.75rem',
          },
        },

        notchedOutline: ({ theme }) => ({
          borderColor: theme.palette.primary.main,
        }),

        root: ({ theme }) => ({
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: theme.palette.primary.main,
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: theme.palette.primary.main,
          },
        }),
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
    },
    // Default styles for selects
    MuiSelect: {
      defaultProps: {
        fullWidth: true,
        size: 'small',
        notched: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          textWrap: 'pretty',
          whiteSpace: 'normal',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          height: 40,
        },
      },
    },
  },
});

export default theme;
