import { Dispatch, FunctionComponent, SetStateAction, useEffect } from "react";
import { StyledNotificationContainer } from "./style";
import { Notification as NotificationType } from "../Catalog";
import { Notification } from "../Notification";

type Props = {
  notifications: NotificationType[];
  setNotifications:  Dispatch<SetStateAction<NotificationType[]>>
};

export const NotificationContainer: FunctionComponent<Props> = ({
  notifications,setNotifications
}) => {
  // useEffect(() => {
  //   if (notifications.length > 0) {
  //     const timeout = setTimeout(() => {
  //       setNotifications((prevNotifications) => prevNotifications.slice(1));
  //     }, 5000);

  //     return () => clearTimeout(timeout);
  //   }
  // }, [notifications, setNotifications]);

  return (
    <StyledNotificationContainer>
      {notifications.map((noti) => {
        return (
          <Notification
            key={noti.id}
            id={noti.id}
            productName={noti.productName}
            type={noti.type}
            setNotifications={setNotifications}
          />
        );
      })}
    </StyledNotificationContainer>
  );
};
