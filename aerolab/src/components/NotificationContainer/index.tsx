import { FunctionComponent } from "react";
import { StyledNotificationContainer } from "./style";
import { Notification } from "../Catalog";
import Image from "next/image";

type Props = {
  notifications: Notification[];
};

export const NotificationContainer: FunctionComponent<Props> = ({
  notifications,
}) => {
  return (
    <StyledNotificationContainer>
      {notifications.map((noti) => {
        return (
          <article key={noti.productId}>
            <Image
              src={"./assets/icons/notification-success.svg"}
              alt=""
              width="32"
              height="32"
            />
            <p>{`${noti.productName} redeemed successfully`}</p>
            <button>
              <Image
                src={"./assets/icons/cross-default.svg"}
                alt=""
                width="32"
                height="32"
              />
            </button>
          </article>
        );
      })}
    </StyledNotificationContainer>
  );
};
