import Image from "next/image";
import type { FunctionComponent } from "react";
import { StyledWalkthroughCard } from "./style";

type Props = {
  image: string;
  icon: string;
  title: string;
  description: string;
};

export const WalkthroughCard: FunctionComponent<Props> = ({
  image,
  icon,
  title,
  description,
}) => {
  return (
    <StyledWalkthroughCard>
      <Image
        src={image}
        alt=""
        width="508"
        height="498"
        className="card__img"
      />

      <div className="card__text">
        <p className="card__title">
          <span>
            <Image src={icon} alt="" width="40" height="40" />
          </span>
          {title}
        </p>
        <p className="card__description">{description}</p>
      </div>
    </StyledWalkthroughCard>
  );
};
