import styled from "styled-components";

export const StyledNotificationContainer = styled.div`
  display: flex;
  position: fixed; 
  z-index: 10; 
  flex-direction:column-reverse;
  left: 8rem;
  bottom: 3.6rem;
  gap: 1.2rem; 
  width: 53.2rem;

  @media(max-width:1024px){
    left: 2rem;
    bottom: 7rem;
  }
`;
