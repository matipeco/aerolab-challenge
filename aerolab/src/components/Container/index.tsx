import { StyledContainer } from "./style";
import type { FunctionComponent, PropsWithChildren } from "react";

export const Container: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return <StyledContainer>{children}</StyledContainer>;
};
