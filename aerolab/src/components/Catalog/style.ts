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
      margin-bottom: 6.4rem;
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

    &__footer {
      text-align: center;
      position: relative;
      font-size: var(--body-l);
      color: var(--neutral-600);
      font-weight: 600;
      padding: 1.8rem 0;
      margin-top: 6.4rem;

      .pagination__container {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .pagination__container {
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
  }
`;
