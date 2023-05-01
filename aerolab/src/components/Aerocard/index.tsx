import { StyledAerocard } from "./style";
import Image from "next/image";

export const Aerocard = () => {
  return (
    <StyledAerocard>
      <div>
        <p className="aerocard-title">Aerocard</p>
        <Image
          src="/assets/icons/aeropay-2.svg"
          alt=""
          width="24"
          height="24"
        />
      </div>
      <div>
        <p>Matias Pecorale</p>
        <p>07/23</p>
      </div>
    </StyledAerocard>
  );
};
