import { createGlobalStyle } from "styled-components";
import img from './img/fondo.png';

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family:  Helvetica;} 


body{
background: url(${img});
background-size:cover;
}

`