import styled from "styled-components";

export const StyledNavbar = styled.nav`
  /* background-color:red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 6rem;
  z-index: 1;
  position: relative;
  
  @media(max-width:1024px){
    padding: 4rem;
    .logo{
      width: 3.8rem;
      height: 3.8rem;
    }
  }

  @media(max-width:375px){
    padding: 4rem 0;
  }
`;
