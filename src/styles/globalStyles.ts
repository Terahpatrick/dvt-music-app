import { createGlobalStyle } from "styled-components";
import { device } from "utils/breakPoints";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
      box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: white;
    font-family: 'Varela Round', sans-serif;
    color: lightgray;


  @media ${device.tablet} {
    font-size: 75%;
  }
    

    & h4 {
      margin: 0;
    }

    & p {
      margin-block: 0.4em;
    }
  }

`;

export default GlobalStyle;
