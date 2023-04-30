import styled from "styled-components";

export const StyledDropdown = styled.button`
  background-color: transparent;
  border-radius: 1.6rem;
  border: 1px solid var(--neutral-300);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1.6rem;
  transition: box-shadow 200ms;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  &:hover {
    cursor: pointer;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);
  }
  .button {
    &__points {
      margin: 0 1.6rem 0 0.8rem;
      font-size: 1.8rem;
      font-weight: 600;
      background-image: var(--brand-gradient);
      background-clip: text;
      color: transparent;
    }
    &__chevron {
      transition: transform 200ms;
      transform: rotate(90deg);
      &.expanded {
        transform: rotate(-90deg);
      }
    }
  }
`;

export const StyledContainer = styled.div`
  position: relative;
`;
