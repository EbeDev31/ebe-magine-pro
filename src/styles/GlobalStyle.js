import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import theme from './theme';
import { device } from './screen-sizes'

const GlobalStyle = createGlobalStyle`
  ${normalize};

  body {
    font-family: 'Play';
    background: ${theme.palette.background.body};
    color: ${theme.palette.text.primary};
  }

  .content-wrapper {
    margin-top: 100px;
    display: grid;
    grid: auto / repeat(1, 1fr);
    gap:20px;
  }

  h1{
    text-align: center;
    font-size:17px;
  }

  .single-movie{
    display:flex;
    flex-direction:column;
    align-items:center;
  }

  @media only screen and ${device.tablet} {
    h1{
      font-size:20px;
    }
    .content-wrapper {
      margin-top: 100px;
      display: grid;
      grid: auto / repeat(3, 1fr);
      gap:20px;
    }
  }
  
  @media only screen and ${device.desktop} {
    h1{
      font-size:40px;
    }
    .content-wrapper {
      margin-top: 100px;
      display: grid;
      grid: auto / repeat(5, 1fr);
      gap:20px;
    }
  }
`;
export default GlobalStyle;
