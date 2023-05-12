import { FunctionComponent } from "react";
import { StyledRadioButton } from "./style";

type Props = {
  id: string;
  label: string;
  name: string;
};

export const RadioButton: FunctionComponent<Props> = ({ id, label, name }) => {
  return (
    <StyledRadioButton>
      <input type="radio" id={id} name={name} />
      <label htmlFor={id}>
        <span>{label}</span>
      </label>
    </StyledRadioButton>
  );
};
