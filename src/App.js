import logo from './logo.svg';
import './App.css';
import { ColorContext } from './ColorContext';
import Home from './Home';
import React, { useContext } from 'react';

const themes = {
  light: {
    foreground: "yellow",
    background: "orange"
  },
  dark: {
    foreground: "brown",
    background: "purple"
  }
};

const obj = {
  property: "red"
}

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <div>
      <Home />
      <ThemeContext.Provider value={obj.property}>
        <Toolbar />
      </ThemeContext.Provider>
    </div>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme, color: theme }}>
      I am styled by theme context!
    </button>
  );
}

export default App;
