import { Aerocard } from "../Aerocard";
import { Button } from "../Button";
import { StyledAeropay } from "./style";
import Image from "next/image";
import { RadioButton } from "../RadioButton";
import { ChangeEvent, useContext, useState } from "react";
import { Context } from "@/context";

export const AeropayModule = () => {
  const { setPoints } = useContext(Context)!;
  const [selectedPoints, setSelectedPoints] = useState(0);

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target;
    setSelectedPoints(Number(value));
  };

  const handleClick = () => {
    setPoints((points) => {
      return points + selectedPoints;
    });
  };
  return (
    <StyledAeropay>
      <p className="module__title">Add Balance</p>
      <Aerocard />
      <div className="module__points">
        <RadioButton
          id="point-1000"
          label="1000"
          name="points"
          value="1000"
          onChange={handleChange}
        />
        <RadioButton
          id="point-5000"
          label="5000"
          name="points"
          value="5000"
          onChange={handleChange}
        />
        <RadioButton
          id="point-7500"
          label="7500"
          name="points"
          value="7500"
          onChange={handleChange}
        />
      </div>

      <Button className="module__button" onClick={handleClick}>
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
