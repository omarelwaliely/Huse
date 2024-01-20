import './App.css';
import AppRouter from './components/AppRouter';
import { ThemeProvider, CssBaseline } from '@mui/material';
import appTheme from './components/Theme';

function App() {
  return (
    < ThemeProvider theme={appTheme} >
      <CssBaseline />
      <AppRouter />
    </ThemeProvider >
  );
}

export default App;
