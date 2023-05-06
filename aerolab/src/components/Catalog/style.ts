import styled from "styled-components";

export const StyledCatalog = styled.section`
  padding-top: 23rem;

  .catalog {
    &__title {
      font-size: var(--heading-3);
      color: var(--neutral-900);
      margin-bottom: 4.2rem;

      span {
        background-image: var(--brand-gradient);
        background-size: 200% 100%;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
      }
    }

    &__products {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
      gap: 8rem 2.4rem;
      justify-content: space-between;
    }
  }
`;
