import React from "react";
import styled from "styled-components";
import ToTop from "./to_top";

const StyledHeader = styled.header`
  height: 4rem;
  position: sticky;
  z-index: 2;
  /* box-shadow: 0 0 10px 0 var(--redColorOKO); */
  border-bottom: 2px solid var(--redColorOKO);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bg);

  h3 {
    margin-left: 2rem;
  }
`;

function Header() {
  return (
    <>
      <StyledHeader>
        <h3>OKO.PRESS articles</h3>
        <ToTop></ToTop>
      </StyledHeader>
    </>
  );
}

export default Header;
