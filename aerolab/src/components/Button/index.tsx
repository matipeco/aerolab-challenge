import { StyledButton } from "./style";
import type {
  FunctionComponent,
  PropsWithChildren,
  ButtonHTMLAttributes,
} from "react";

export type ButtonStatus = "disabled" | "pending" | "default";

type Props = PropsWithChildren<
  {
    status?: ButtonStatus;
    className: string;
  } & ButtonHTMLAttributes<HTMLButtonElement>
>;

export const Button: FunctionComponent<Props> = ({
  children,
  className,
  status = "default",
  ...rest
}) => {
  return (
    <StyledButton
      className={`${className} ${status}`}
      disabled={status === "disabled"}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
