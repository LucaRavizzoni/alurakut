import { createGlobalStyle, ThemeProvider } from "styled-components";
import { AlurakutStyles } from "../src/lib/AlurakutCommons";

const GlobalStyle = createGlobalStyle`
  /* Reset CSS (Necolas Reset CSS <3)*/ 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
   }
    
   //Tentativa de mudar o brackground por uma iamgem
    body {  
      background-image: url('https://pixelz.cc/wp-content/uploads/2019/12/fortnite-loading-screen-llama-uhd-4k-wallpaper.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      font-family: sans-serif;
   }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
    
    img {
      max-width: 100%;
      height: auto;
      display: block;
    } 
    
    ${AlurakutStyles}
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
