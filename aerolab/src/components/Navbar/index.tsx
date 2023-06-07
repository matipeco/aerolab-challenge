import { StyledNavbar } from "./style";
import Image from "next/image";
import { Dropdown } from "../Dropdown";
import { Container } from "../Container";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isTablet, setIsTablet] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsTablet(width <= 1024);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <StyledNavbar>
        <Image
          src={`./assets/icons/aerolab-logo-${isTablet ? '2' : '1'}.svg`}
          alt="logo de aerolab"
          width="126"
          height="48"
        />
        <Dropdown />
      </StyledNavbar>
    </Container>
  );
};
