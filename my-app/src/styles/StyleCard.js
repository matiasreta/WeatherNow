import styled from "styled-components";

export const StyleCard = styled.div`
margin: auto;
margin-top:20px;
width: 180px;
min-height: 210px;
border-radius:8px;
background-color: hsl(177, 54%, 93%);
border: 0px solid black;

`
export const StyleTwoOptions = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;

 button.discard{
    border-radius: 0px 0px 7px 0px;
    border:1px solid black;
 }
 button.like{
    border-radius: 0px 0px 0px 7px;
    border:1px solid black;
 }

`