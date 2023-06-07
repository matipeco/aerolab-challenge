import styled from "styled-components";

export const StyledWalkthroughCard = styled.article`
  --border: 1px solid var(--neutral-300);

  background-color: var(--neutral-0);
  border: var(--border);
  box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.05);
  border-radius: 3.2rem;
  width: 53.2rem;
  padding: 1rem;
  text-align: center;

  .card {
    &__img {
      background-image: var(--gradient-ilustration);
      border-radius: 2.2rem 2.2rem 0 0;
      border: var(--border);
      display: block;
      width: 100%;
    }
    &__text {
      text-align: left;
      padding: 2.4rem;
      border: var(--border);
      border-top: 0;
      border-radius: 0 0 2.2rem 2.2rem;
    }

    &__title {
      font-size: var(--heading-4);
      font-weight: 900;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      margin-bottom: 1.2rem;
      background-image: var(--brand-gradient);
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      span {
        background-color: var(--brand-light-100);
        border-radius: 0.8rem;
        width: 4.8rem;
        height: 4.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.6rem;
      }
    }
    &__description {
      max-width: 30ch;
      font-size: var(--body-l);
      font-weight: 600;
      line-height: 1.5;
      color: var(--neutral-600);
    }
  }
  @media (max-width: 1024px){
    max-width: 32.3rem;
    padding: 1rem;
    .card {
    &__img {
      height:27.5rem;
    }
    &__text {
    }

    &__title {
      font-size: var(--heading-5);
      font-weight: 900;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      margin-bottom: 1.2rem;
      
      span {
        width: 4rem;
        height: 4rem;
        margin-right: 1.6rem;
        
        img{
          width: 2.6rem;
          height: 2.6rem;
        }
      }
    }
    &__description{
      font-size: var(--body-m);
    }
  }
  }
`;
