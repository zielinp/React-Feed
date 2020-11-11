import React from "react";
import styled from "styled-components";
import ToTop from "./to_top";

const StyledHeader = styled.header`
  height: 4rem;
  position: sticky;
  z-index: 2;
  /* box-shadow: 0 0 16px 0 var(--redColorOKO); */
  border-bottom: 2px solid var(--redColorOKO);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bg);
  display: flex;
  justify-content: space-between;

  a {
    margin-left: 2rem;
    text-decoration: none;
    font-weight: bold;
  }
`;

function Header() {
  return (
    <>
      <StyledHeader>
        <a target="blank" href="https://oko.press/">
          OKO.press articles
        </a>
        <ToTop></ToTop>
      </StyledHeader>
    </>
  );
}

export default Header;
