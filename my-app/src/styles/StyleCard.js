import styled from "styled-components";

export const StyleCard = styled.div`


margin: auto;
margin-top:20px;
width: 180px;
border-radius:8px;
background-color: hsl(177, 54%, 93%);

`
export const StyleTwoOptions = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;

button.discard{

   border-radius: 0px 0px 7px 0px;
   border:2px solid #63d6df;
   border-left:1px solid #63d6df;

 }
button.like{

   border-radius: 0px 0px 0px 7px;
   border:2px solid #63d6df;
   border-right:1px solid #63d6df;
 }

`