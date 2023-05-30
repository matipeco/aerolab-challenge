import { FunctionComponent } from "react";
import { StyledNotification } from "./style";
import Image from "next/image";

type Props = {
  productName: string;
  type: "error" | "success";
};

export const Notification: FunctionComponent<Props> = ({
  productName,
  type = "success",
}) => {
  return (
    <StyledNotification className={type === "error" ? "error" : undefined}>
      <Image
        src={`./assets/icons/notification-${type}.svg`}
        alt=""
        width="32"
        height="32"
      />
      <p>
        <span>{productName}</span> redeemed successfully
      </p>
      <button>
        <Image
          src={"./assets/icons/cross-default.svg"}
          alt=""
          width="32"
          height="32"
        />
      </button>
    </StyledNotification>
  );
};
