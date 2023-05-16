import { StyledDropdown, StyledContainer } from "./style";
import Image from "next/image";
import { useState, useContext } from "react";
import { AeropayModule } from "../AeropayModule";
import { Context } from "@/context";

export const Dropdown = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { points } = useContext(Context)!;

  return (
    <StyledContainer>
      <StyledDropdown onClick={() => setIsExpanded(!isExpanded)}>
        <Image
          src="./assets/icons/aeropay-1.svg"
          alt=""
          width="32"
          height="32"
        />
        <span className="button__points">{points}</span>
        <Image
          src="./assets/icons/chevron-default.svg"
          alt=""
          width="24"
          height="24"
          className={`button__chevron ${isExpanded ? "expanded" : ""}`}
        />
      </StyledDropdown>

      {isExpanded && <AeropayModule />}
    </StyledContainer>
  );
};
