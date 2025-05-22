import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});

export const globalStyles = {
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  html: {
    margin: 0,
    padding: 0,
  },
  body: {
    margin: 0,
    padding: 0,
  },
};
