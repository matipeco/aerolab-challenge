import { StyledButton } from "./style";
import type {
  FunctionComponent,
  PropsWithChildren,
  ButtonHTMLAttributes,
} from "react";

type Props = PropsWithChildren<
  {
    isPending?: boolean;
    className: string;
  } & ButtonHTMLAttributes<HTMLButtonElement>
>;

export const Button: FunctionComponent<Props> = ({
  children,
  className,
  isPending,
  disabled,
  ...rest
}) => {
  return (
    <StyledButton
      className={`${className} ${isPending ? "pending" : ""} ${
        disabled ? "disabled" : ""
      }`}
      disabled={disabled ? true : undefined}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
