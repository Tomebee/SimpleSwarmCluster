import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0;
  }
  
  body {
    font-family: 'Quicksand' , sans-serif;
    width: 100%;
    min-height: 100vh;
    background: #F6F6F8;
    color: #F9D342;
  }

  h1 {
    letter-spacing: 3px;
    text-align: center;
    font-size: 48px;
    cursor: default;
  }
`;