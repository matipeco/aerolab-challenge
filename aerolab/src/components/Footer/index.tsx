import Image from "next/image";
import { Container } from "../Container";
import { StyledFooter } from "./style";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Image
          src="./assets/icons/github-default.svg"
          width="28"
          height="28"
          alt=""
        />
        <a href="https://github.com/matipeco/aerolab-challenge">
          View this repository
        </a>
      </Container>
    </StyledFooter>
  );
};
