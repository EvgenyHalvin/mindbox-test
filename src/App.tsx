import { CssBaseline, ThemeProvider, GlobalStyles } from '@mui/material';

import { MainPage } from './connectors';
import { theme, globalStyles } from './shared/ui';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <MainPage />
    </ThemeProvider>
  );
};
