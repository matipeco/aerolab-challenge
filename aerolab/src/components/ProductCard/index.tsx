import { FunctionComponent } from "react";
import { StyledProductCard } from "./style";
import Image from "next/image";
import { Button } from "../Button";

type Props = {
  image: string;
  id: string;
  name: string;
  cost: number;
  category: string;
};

export const ProductCard: FunctionComponent<Props> = ({
  image,
  id,
  name,
  cost,
  category,
}) => {
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
      <Button className="card__button">
        Redeem for{" "}
        <Image
          src="/assets/icons/aeropay-3.svg"
          alt=""
          width="24"
          height="24"
        />
        {cost}
      </Button>
    </StyledProductCard>
  );
};
