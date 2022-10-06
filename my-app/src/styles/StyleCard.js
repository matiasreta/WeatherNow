import styled from "styled-components";


export const StyleCard = styled.div`

margin-top:20px;
width: 230px;
height: 280px;
position: relative;
color: white;


&:before{
  box-sizing: border-box;
  content: '';
  border-radius:30px;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background: #2B3C78;
  mix-blend-mode:color-burn;
  box-shadow:1px 1px 14px 1px #817f7f;
  
}

div.main{
  
  position: relative;
  z-index: 3;
}
button{
  border: none;
  background-color: #eeeeee;
  margin-top:93px
  
}
.fav{
  border-right: 1px solid #D9D9D9;
  height: 30px;
  width: 50%;
  border-radius: 0px 0px 0px 40px;
}
.del{
  border-left: 1px solid #D9D9D9;
  height: 30px;
  width: 50%;
  border-radius: 0px 0px 40px 0px;
}

h3{
  margin-top:40px;
  text-align:center;
  font-size:24px;
}
p{
  font-size: 16px;
  text-align:center;
}


`