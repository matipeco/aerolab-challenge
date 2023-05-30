import { FunctionComponent } from "react";
import { StyledNotificationContainer } from "./style";
import { Notification as NotificationType } from "../Catalog";
import { Notification } from "../Notification";

type Props = {
  notifications: NotificationType[];
};

export const NotificationContainer: FunctionComponent<Props> = ({
  notifications,
}) => {
  return (
    <StyledNotificationContainer>
      {notifications.map((noti) => {
        return (
          <Notification
            key={noti.id}
            productName={noti.productName}
            type={noti.type}
          />
        );
      })}
    </StyledNotificationContainer>
  );
};
