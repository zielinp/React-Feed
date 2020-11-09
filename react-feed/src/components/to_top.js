import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--elements);
  padding: 0.75rem 1rem;
  color: var(--textNormal);
  border-radius: 0.5rem;
  /* border: 2px solid var(--redColorOKO); */
  border: none;
  box-shadow: 10px 10px 37px -3px var(--boxShadowColor);
  margin-right: 2rem;
  :hover {
    transform: scale(0.95);
    box-shadow: 6px 6px 23px -3px var(--boxShadowColor);
    cursor: pointer;
  }
`;

function ToTop() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <StyledButton onClick={scrollToTop}>Back to top</StyledButton>
    </>
  );
}

export default ToTop;
