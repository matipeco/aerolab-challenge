import styled from "styled-components";

export const StyledHero = styled.section`
  background-image: url("./assets/illustrations/single-wave-pattern.svg");
  padding: 11.2rem 0 20rem;
  z-index: 1;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }

  .hero {
    &__title {
      font-size: var(--heading-1);
      line-height: 1;
      color: var(--neutral-900);
    }

    &__description {
      color: var(--neutral-600);
      font-size: var(--body-l);
      max-width: 50ch;
      line-height: 1.5;
      font-weight: 600;
    }

    &__link {
      background-image: var(--brand-gradient);
      font-size: var(--body-l);
      font-weight: 600;
      color: var(--neutral-0);
      text-decoration: none;
      text-transform: uppercase;
      padding: 2.6rem 4rem;
      margin-top: 6.4rem;
      border-radius: 2.4rem;
      display: inline-flex;
      align-items: center;

      img {
        margin-left: 0.5rem;
      }
    }

    &__image-container {
      max-width: 70rem;
      width: 70rem;
      height: 57rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &::before {
        content: "";
        background-image: var(--gradient-section);
        border-radius: 10.4rem;
        display: block;
        width: 100%;
        height: 100%;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
      }

      img {
        position: absolute;
        bottom: 0;
        max-width: 100%;
        object-fit: cover;
      }
    }
  }

  .title {
    &__overline {
      text-transform: uppercase;
      color: var(--neutral-600);
      font-weight: 600;
      font-size: 1.8rem;
      letter-spacing: 2px;
      margin-bottom: -1rem;
      display: block;
    }
    &__tech {
      margin-bottom: -3rem;
      display: block;
      color: transparent;
      background-image: var(--brand-gradient);
      background-clip: text;
      -webkit-background-clip: text;
    }
  }
`;
