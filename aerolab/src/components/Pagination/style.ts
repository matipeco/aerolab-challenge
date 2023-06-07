import styled from "styled-components";

export const StyledPagination = styled.div`
  border: 1px solid var(--neutral-300);
  border-radius: 1.6rem;
  display: flex;
  align-items: center;
  padding: 1.2rem;
  margin-left: auto;

  button {
    border: none;
    border-radius: 0.8rem;
    background-color: var(--brand-light-100);
    padding: 0.8rem;
    cursor: pointer;


    &:disabled {
      background-color: var(--neutral-300);

      img {
        opacity: 0.5;
      }
    }

    .chevron-left {
      transform: rotate(180deg);
    }
  }

  p {
    margin: 0 2.4rem;

    span {
      background-image: var(--brand-gradient);
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
    }
  }
`;
