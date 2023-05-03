import { Aerocard } from "../Aerocard";
import { Button } from "../Button";
import { StyledAeropay } from "./style";
import Image from "next/image";

export const AeropayModule = () => {
  return (
    <StyledAeropay>
      <p className="module__title">Add Balance</p>
      <Aerocard />
      <div className="module__points">
        <input type="radio" id="point-1000" name="points" />
        <label htmlFor="point-1000">
          <span>1000</span>
        </label>
        <input type="radio" id="point-5000" name="points" />
        <label htmlFor="point-5000">
          <span>5000</span>
        </label>
        <input type="radio" id="point-7500" name="points" />
        <label htmlFor="point-7500">
          <span>7500</span>
        </label>
      </div>

      <Button className="module__button">
        <Image
          src="/assets/icons/aeropay-3.svg"
          alt=""
          width="24"
          height="24"
        />
        Add Points
      </Button>
    </StyledAeropay>
  );
};