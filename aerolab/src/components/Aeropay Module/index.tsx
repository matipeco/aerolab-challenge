import { Aerocard } from "../Aerocard";
import { Button } from "../Button";
import { StyledAeropay } from "./style";
import Image from "next/image";
import { RadioButton } from "../RadioButton";

export const AeropayModule = () => {
  return (
    <StyledAeropay>
      <p className="module__title">Add Balance</p>
      <Aerocard />
      <div className="module__points">
        <RadioButton id="point-1000" label="1000" name="points" />
        <RadioButton id="point-5000" label="5000" name="points" />
        <RadioButton id="point-7500" label="7500" name="points" />
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
