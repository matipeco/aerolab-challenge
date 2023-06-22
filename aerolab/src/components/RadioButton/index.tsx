import { FunctionComponent, InputHTMLAttributes } from "react";
import { StyledRadioButton } from "./style";

type Props = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const RadioButton: FunctionComponent<Props> = ({
  id,
  label,
  ...rest
}) => {
  return (
    <StyledRadioButton>
      <input
        type="radio"
        id={id}
        {...rest}
      />
      <label htmlFor={id}>
        <span>{label}</span>
      </label>
    </StyledRadioButton>
  );
};
