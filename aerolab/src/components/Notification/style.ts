import styled from "styled-components";

export const StyledNotification = styled.article`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 53.2rem;
  border: 2px solid var(--green-200);
  border-radius: 1.2rem;
  font-size: var(--body-l);
  color: var(--neutral-600);
  background-color: var(--neutral-0);
  padding: 2.8rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);

  p{
    margin-left: 1.5rem;
  }
  span {
    color: var(--neutral-900);
    font-weight: 600;
  }
  .btn-close {
    background-color: transparent;
    border: none;
    margin-left: auto;
    cursor: pointer;
  }

  &.error {
    border-color: var(--red-200);
  }


`;
