import styled from "styled-components";

export const StyledFooter = styled.footer`
  margin-top: 16rem;
  padding: 8rem 0;
  background-color: var(--neutral-0);
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a {
    font-weight: 600;
    margin-left: 1rem;
    text-decoration: none;
    color: var(--neutral-600);
    font-size: var(--body-l);
  }
  @media(max-width: 1024px){
    padding:4.6rem 0;
    margin:16rem 0 0 0;
  }
`;
