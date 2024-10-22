import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import ListagemNaves from './views/ListagemNaves/ListagemNaves';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {
  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#282c34',
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& label': {
              color: '#282c34',
              fontFamily: 'Courier, monospace',
            },
            '& label.Mui-focused': {
              color: '#282c34',
            },
            '& .MuiInput-underline:before': {
              borderBottomColor: '#282c34',
            },
            '& .MuiInput-underline:hover:before': {
              borderBottomColor: '#282c34',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: '#282c34',
            },
            '& .MuiInputBase-input': {
              color: '#282c34',
              fontFamily: 'Courier, monospace',
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: '#282c34',
            fontFamily: 'Courier, monospace',
          },
          focused: {
            color: '#282c34',
            fontFamily: 'Courier, monospace',
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          select: {
            color: '#282c34',
            fontFamily: 'Courier, monospace',
            '&:focus': {
              backgroundColor: 'transparent', 
            },
          },
          icon: {
            color: '#282c34', 
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontFamily: 'Courier, monospace',
            color: '#282c34',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#282c34',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#282c34',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#282c34',
            },
          },
          input: {
            color: '#282c34',
            fontFamily: 'Courier, monospace',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listagem-naves" element={<ListagemNaves />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
