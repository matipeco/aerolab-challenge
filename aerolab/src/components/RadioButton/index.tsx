import { FunctionComponent, InputHTMLAttributes } from "react";
import { StyledRadioButton } from "./style";

type Props = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const RadioButton: FunctionComponent<Props> = ({
  id,
  label,
  name,
  value,
  onChange,
}) => {
  return (
    <StyledRadioButton>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}>
        <span>{label}</span>
      </label>
    </StyledRadioButton>
  );
};
