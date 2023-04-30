import { StyledButton } from "./style";
import type { FunctionComponent, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className: string;
}>;

export const Button: FunctionComponent<Props> = ({ children, className }) => {
  return <StyledButton className={className}>{children}</StyledButton>;
};
