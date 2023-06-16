import styled from "styled-components";

export const StyledHero = styled.section`
  background-image: url("./assets/illustrations/single-wave-pattern.svg");
  padding: 11.2rem 0 20rem;
  z-index: 1;
  
  & > div {
    /* background-color: red; */
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

    a{
      scroll-behavior: smooth;
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
      transition: 200ms ease-in;

      &:hover{
        transform: scale(1.03);
        opacity: 0.9;
      }

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
  
  @media(max-width: 1024px){
    padding: 0;
    padding-top: 4rem;
    padding-bottom: 32rem;
    display: flex;
    align-items: center;
    justify-content: center;
    & > div {
      /* background-color: yellow; */
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-direction: column;
      /* gap: 3rem; */
    }
    .title__tech{
      display: inline;
    }
    .title__overline{
      font-size: var(--body-m);
      /* color: red; */
      
    }
    .hero{
      &__title{
        font-size: var(--body-m);
        font-size: var(--heading-2);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
      }
      
      &__description{
        max-width: 28.9rem;
        margin-top:2.4rem ;
        font-size: var(--body-m);
      }
      &__link{
        font-size: var(--body-m);
        padding: 2rem 4rem;
        margin-top: 4rem;
      }
      &__image-container{
        display: flex;
        width: 58rem;
        height: 51.8rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        &::before {
          display: none;
        }

        img{
          /* position: absolute; */
          width: 100%;
          height: 51.8rem;
          /* top: 0; */
        }
      }
   }
  }

  @media(max-width: 375px){
    padding-bottom: 10rem;
      
  }
`;
