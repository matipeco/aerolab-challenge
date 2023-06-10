import styled from "styled-components";

export const StyledButton = styled.button`
  background-image: var(--brand-gradient);
  border-radius: 1.6rem;
  border: none;
  text-align: center;
  padding: 1.2rem 1.6rem;
  min-width: 10rem;
  color: var(--neutral-0);
  font-size: 1.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  &.pending {
    opacity: 0.7;
  }
  &.disabled {
    background-image: none;
    background-color: var(--neutral-200);
    color: var(--neutral-600);
    opacity: 1;
  }

  @media(max-width: 1024px){
    background-color: blue;
    
  }
`;
