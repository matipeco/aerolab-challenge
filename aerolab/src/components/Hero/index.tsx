import { StyledHero } from "./style";
import { Container } from "@/components/Container";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <div>
          <h1 className="hero__title">
            <span className="title__overline">explore the </span>
            <span className="title__tech">tech</span>
            zone
          </h1>
          <p className="hero__description">
            Here you’ll be able to exchange all of your hard-earned Aeropoints
            and exchange them for cool tech.
          </p>
          <Link href="#" className="hero__link">
            View all products
            <Image
              src="./assets/icons/arrow.svg"
              alt=""
              width="32"
              height="32"
            />
          </Link>
        </div>
        <div>
          <div className="hero__image-container">
            <Image
              src="/assets/illustrations/hero-desktop.png"
              alt="persona haciendo malabares"
              width="897"
              height="795"
            />
          </div>
        </div>
      </Container>
    </StyledHero>
  );
};
