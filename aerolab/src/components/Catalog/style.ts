import styled from "styled-components";

export const StyledCatalog = styled.section`
  padding-top: 23rem;
  .filters {
    &__container {
      display: flex;
      align-items: center;
      font-size: var(--body-l);
      color: var(--neutral-600);
      font-weight: 600;
    }

    &__select {
      margin: 0 4rem;
      padding: 1.6rem 2.4rem;
      font: inherit;
      color: inherit;
      background-color: var(--neutral-0);
      border: 1px solid var(--neutral-300);
      border-radius: 1.6rem;
    }
  }
  .select__container {
    display: flex;
    align-items: center;
    border-right: 2px solid var(--neutral-300);
    margin-right: 4rem;
  }

  .radio__container {
    display: flex;
    align-items: center;
    & > span:not(:last-child) {
      margin-right: 1.2rem;
    }
    p {
      margin-right: 1.6rem;
    }
  }
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
