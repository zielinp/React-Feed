import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";

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
      <StyledButton onClick={scrollToTop}>
        {" "}
        <FontAwesomeIcon
          icon={faLongArrowAltUp}
          color="var(--redColorOKO)"
          size="1x"
        />
        <span> To top</span>
      </StyledButton>
    </>
  );
}

export default ToTop;
