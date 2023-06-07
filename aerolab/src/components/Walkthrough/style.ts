import styled from "styled-components";

export const StyledWalkthrough = styled.section`
  background-image: var(--gradient-section);
  height: 53rem;
  display: flex;
  align-items: flex-end;
  & > div {
    display: flex;
    margin-bottom: 3.2rem;
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

  @media(max-width:1024px){
    height: 65.6rem;
    
    & > div {
    gap: 0.8rem;
    }
    article:first-of-type {
      margin-left:1.7rem;
      transform: none;
      z-index: 0;
    }
    article:nth-of-type(2) {
      z-index: 0;
      transform: none;
      border: 1rem solid transparent;
      padding: 0;
      

    }
    article:last-of-type {
      transform: none;
      z-index: 0;
    }
  }
`;
