import React from 'react';
import './App.css';
import LoginPage from "./containers/LandingPage"
import { ThemeProvider } from "styled-components"
import { theme } from "./themes/themes"
import styled from "styled-components"
const Background = styled.div`
    background-image: ${props => props.theme.bg};
    height: 100%;
    width: 100%;
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Background>
          <LoginPage/>
        </Background>
    </ThemeProvider>
  );
}

export default App;
