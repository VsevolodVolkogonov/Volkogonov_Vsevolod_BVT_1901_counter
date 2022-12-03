import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyled = createGlobalStyle`
  ${normalize}
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
  
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.primary};
  }
  
  h1, h2, h3, h4, h5, h6  {
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
    padding: 0;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    background: transparent;

    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;

    /* Normalize \`line-height\`. Cannot be changed from \`normal\` in Firefox 4+. */
    line-height: normal;

    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    /* Corrects inability to style clickable \`input\` types in iOS */
    -webkit-appearance: none;

    text-align: inherit;
    outline: none;
    border-radius: 0;

    :focus:not(:focus-visible) {
      outline: none;
    }
    :focus:not(:-moz-focusring) {
      outline: none;
    }

    all: unset;
    
    &:focus {
      border: 0;
      padding: 0;
    }
  }
`