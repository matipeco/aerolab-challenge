import styled from "styled-components";

export const StyledWalkthrough = styled.section`
  background-image: var(--gradient-section);
  height: 53rem;
  display: flex;
  align-items: center;
  & > div {
    display: flex;
  }

  article:first-of-type {
    transform: rotate(-3deg) translateX(6rem);
    z-index: 1;
  }
  article:nth-of-type(2) {
    z-index: 2;
    transform: translateY(-3rem);
  }
  article:last-of-type {
    transform: rotate(3deg) translateX(-6rem);
    z-index: 3;
  }
`;
