import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { StyledNotification } from "./style";
import Image from "next/image";
import { Notification as NotificationType } from "../Catalog";

type Props = {
  id: string;
  productName: string;
  type: "error" | "success";
  setNotifications:Dispatch<SetStateAction<NotificationType[]>>
};

export const Notification: FunctionComponent<Props> = ({
  id,
  productName,
  type = "success",
  setNotifications,
}) => {

  const handleClose = (id:string )=>{
    setNotifications((notifications)=>{
      return notifications.filter((noti)=>noti.id !== id);
    })
  }
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
      <button className="btn-close" onClick={()=>handleClose(id)}>
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
