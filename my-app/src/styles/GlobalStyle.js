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
/*
import img from './img/fondo.png';

body{
    background-image:url(${img});
    background-size:cover;

    background:url(${img}),url(${img});
    background-blend-mode: color-burn;
    } */