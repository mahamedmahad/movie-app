import {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --white: #fff;
    --lightGray: #eee;
    --medGrey: #353535;
    --darkGray: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }
  
  body {
    h1 {

      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
      margin-bottom: 20px;
    }
    
    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }
    
    p {
      font-size: 1rem;
      color: var(--white);
    }
  }


`;