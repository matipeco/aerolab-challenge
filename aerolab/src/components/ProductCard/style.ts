import styled from "styled-components";

export const StyledProductCard = styled.article`
  background-color: var(--neutral-0);
  
  .card {
    &__container {
      box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.06);
      border-radius: 1.6rem;

    }
    &__img-container {
      padding: 6.4rem 3.4rem;
      border: 1px solid var(--neutral-300);
      border-radius: 1.6rem 1.6rem 0 0;
    }
    &__info {
      padding: 1.6rem 2.4rem 2.4rem;
      border: 1px solid var(--neutral-300);
      border-top: 0;
      border-radius: 0 0 1.6rem 1.6rem;
      margin-bottom: 1.6rem;
    }
    &__title {
      font-weight: 600;
      color: var(--neutral-900);
      font-size: var(--body-l);
      text-transform: none;
    }
    &__category {
      font-weight: 600;
      font-size: var(--body-s);
      text-transform: uppercase;
      color: var(--neutral-600);
      letter-spacing: 1px;
      margin-top: 0.5rem;
    }
    &__button {
      width: 100%;
      padding-top: 1.6rem;
      padding-bottom: 1.6rem;
      cursor: pointer;
    }
  }
`;
