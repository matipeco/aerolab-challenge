import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { v4 } from "uuid";
import { StyledProductCard } from "./style";
import Image from "next/image";
import { Button, ButtonStatus } from "../Button";
import { Context } from "@/context";
import { Notification } from "../Catalog";

type Props = {
  image: string;
  id: string;
  name: string;
  cost: number;
  category: string;
  setNotifications: Dispatch<SetStateAction<Notification[]>>;
};

type ButtonContent = {
  text: string;
  image: string | null;
  aeropoints: number | null;
  status: ButtonStatus;
};

const getButtonContent = (
  cost: number,
  points: number,
  isPending: boolean
): ButtonContent => {
  const canBuy = cost <= points;

  if (!canBuy) {
    return {
      text: "You need ",
      image: "/assets/icons/aeropay-4.svg",
      aeropoints: cost - points,
      status: "disabled",
    };
  }

  if (isPending) {
    return {
      text: "Processing...",
      image: null,
      aeropoints: null,
      status: "pending",
    };
  }

  return {
    text: "Redeem for ",
    image: "/assets/icons/aeropay-3.svg",
    aeropoints: cost,
    status: "default",
  };
};

export const ProductCard: FunctionComponent<Props> = ({
  image,
  id,
  name,
  cost,
  category,
  setNotifications,
}) => {
  const [isPending, setIsPending] = useState(false);

  const { points, setPoints } = useContext(Context)!;

  const {
    text,
    image: img,
    aeropoints,
    status,
  } = getButtonContent(cost, points, isPending);

  const handleClick = () => {
    setIsPending(true);

    setTimeout(() => {
      setIsPending(false);
      setPoints(points - cost);
      setNotifications((notifications) => {
        return [
          ...notifications,
          { productName: name, type: "success", id: v4() },
        ];
      });
    }, 1000);
  };

  return (
    <StyledProductCard>
      <div className="card__container">
        <div className="card__img-container">
          <Image src={image} alt={name} width="280" height="204" />
        </div>
        <div className="card__info">
          <h3 className="card__title">{name}</h3>
          <p className="card__category">{category}</p>
        </div>
      </div>

      <Button className="card__button" status={status} onClick={handleClick}>
        {text}
        {img && <Image src={img} alt="" width="24" height="24" />}
        {aeropoints}
      </Button>
    </StyledProductCard>
  );
};
