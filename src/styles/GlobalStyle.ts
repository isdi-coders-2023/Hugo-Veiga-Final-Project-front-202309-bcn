import { createGlobalStyle } from "styled-components";
import "@fontsource-variable/jura";

const GlobalStyle = createGlobalStyle`
 
 *,
::after,
::before {
  box-sizing: border-box;
}

html {
  font-family: ${({ theme }) => theme.typography.mainFont};
}

h1,
h2,
body {
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
}

img { 
  max-width: 100%;
}

a{
text-decoration: none;
color: inherit;
}

ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

input, textarea, select{
  border: none;
  font-family: inherit;
  outline: none
}

button{
  border: none;
  font: inherit;
  cursor: pointer;
}

`;

export default GlobalStyle;
