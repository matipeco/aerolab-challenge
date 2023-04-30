import { StyledNavbar } from "./style";
import Image from "next/image";
import { Dropdown } from "../Dropdown";
import { Container } from "../Container";

export const Navbar = () => {
  return (
    <Container>
      <StyledNavbar>
        <Image
          src="./assets/icons/aerolab-logo-1.svg"
          alt="logo de aerolab"
          width="126"
          height="48"
        />
        <Dropdown />
      </StyledNavbar>
    </Container>
  );
};
