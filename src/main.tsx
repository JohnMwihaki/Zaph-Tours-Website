import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles';
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import theme from './Theme/theme.ts';
import { CssBaseline } from '@mui/material';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
   <ThemeProvider theme={theme}>
    <CssBaseline/>
    <App />
    </ThemeProvider>
   </BrowserRouter>
  </StrictMode>,
)
