import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#00bcd4',
    },
    background: {
      default: '#1a1a1a',
      paper: 'rgba(26, 26, 26, 0.8)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="app">
        <Navbar />
        <Hero />
        <Team />
        <Vision />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
