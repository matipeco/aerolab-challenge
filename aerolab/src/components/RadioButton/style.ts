import styled from "styled-components";

export const StyledRadioButton = styled.span`
  label {
    display: inline-block;
    width: 100%;
    text-align: center;
    background-color: var(--brand-light-100);
    padding: 0.8rem 1rem;
    border-radius: 1.2rem;
    color: transparent;
    font-weight: 600;
    cursor: pointer;
    span {
      background-image: var(--brand-gradient);
      background-clip: text;
      -webkit-background-clip: text;
    }
  }

  input:checked + label {
    color: var(--neutral-100);
    background-image: var(--brand-gradient);
  }
  input {
    appearance: none;
  }
`;
