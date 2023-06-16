import styled from "styled-components";

export const StyledNotification = styled.article`
  @keyframes fade-in {
  from {
    opacity: 0;
    }
  to {
    opacity: 1;
    }
  }

  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border: 2px solid var(--green-200);
  border-radius: 1.2rem;
  font-size: var(--body-l);
  color: var(--neutral-600);
  background-color: var(--neutral-0);
  padding: 2.8rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  animation: fade-in 0.9s ease;

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

  @media(max-width:375px){
    img{
      align-self: flex-start;
      width: 19.5px;
      height: 19.5px;
    }
    p{
      font-size: var(--body-m);
    }
  }
`;
