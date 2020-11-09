import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap');

body{
    padding:0;
    margin:0;
    font-family: 'Nunito Sans', sans-serif;
    --bg: hsl(207, 26%, 17%);
    --boxShadowColor: hsl(207, 26%, 10%);
    --elements: hsl(209, 23%, 22%);
    --textTitle: hsl(0, 0%, 100%);
    --textNormal: hsl(0, 0%, 82%);
    --textInput: hsl(0, 0%, 100%);
    --desktopFontSize: 16px;
    --mobileFontSize: 10px;
    --redColorOKO: #9e1c1c; 
    background-color: var(--bg);
}

h1,h2,h3,h4,h5,h6,p,span {
    color: var(--textNormal);
    line-height: 1.25;
    }

p{
  font-size:var(--desktopFontSize);
}
h2{
  font-size: calc(var(--desktopFontSize) * 1.5) ;
  @media only screen and (max-width: 425px) {
    font-size: calc(var(--desktopFontSize) * 1.25) ;
  }
}
button{
  font-size:var(--desktopFontSize);
}
* {
    box-sizing: border-box;
    :focus {
      outline: none;
    }
}
`;

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}

export default Layout;
