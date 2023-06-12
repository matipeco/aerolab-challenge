import styled from "styled-components";

export const StyledAeropay = styled.div`
  --padding-x: 2.4rem;
  position: absolute;
  background-color: var(--neutral-0);
  right: 0;
  margin-top: 0.8rem;
  padding: 1.6rem var(--padding-x);
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  border-radius: 1.6rem;
  border: 1px solid var(--neutral-300);
  font-size: 1.8rem;
  width: 31.2rem;
  z-index: 2;

  .module {
    &__title {
      color: var(--neutral-900);
      font-weight: 600;
      white-space: nowrap;
      margin: 0 calc(var(--padding-x) * -1) 2.4rem;
      padding: 0 var(--padding-x) 1.5rem;
      border-bottom: 1px solid var(--neutral-300);
    }
    &__button {
      margin-top: 2.4rem;
      width: 100%;
      cursor: pointer;

    }
    &__points {
      white-space: nowrap;
      display: flex;
      & > span:not(:last-child) {
        margin-right: 0.4rem;
      }
      & > span {
        flex: 1;
      }
    }
  }

  @media(max-width:375px){
    .module{
      &__points{
        label{
          padding: 1rem;
        }
      }
    }
  }
`;
