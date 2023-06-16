import styled from "styled-components";

export const StyledAerocard = styled.div`
  background-color: var(--neutral-900);
  border-radius: 0.8rem;
  padding: 1.6rem;
  color: var(--neutral-100);
  height: 14.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  margin-bottom: 4rem;
  font-size: 1.4rem;
  
  &::after {
    content: "";
    display: block;
    background-image: url("/assets/illustrations/single-wave-pattern.svg");
    opacity: 0.2;
    position: absolute;
    inset: 50% -1rem -3rem;
    transform: rotate(-10deg);
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .aerocard-title {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;
