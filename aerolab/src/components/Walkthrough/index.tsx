import { Container } from "../Container";
import { WalkthroughCard } from "../WalkthroughCard";
import { StyledWalkthrough } from "./style";

export const Walkthrough = () => {
  return (
    <StyledWalkthrough>
      <Container>
        <WalkthroughCard
          image="/assets/illustrations/walkthroug-1-desktop.png"
          icon="/assets/icons/walkthrough-1.svg"
          title="1—browse"
          description="Browse our tech catalog with more than 20 top tech products"
        />
        <WalkthroughCard
          image="/assets/illustrations/walkthroug-2-desktop.png"
          icon="/assets/icons/walkthrough-2.svg"
          title="2—choose"
          description="Exchange your hard earned AeroPoints for the item you want"
        />
        <WalkthroughCard
          image="/assets/illustrations/walkthroug-3-desktop.png"
          icon="/assets/icons/walkthrough-3.svg"
          title="3—enjoy!"
          description="All done, you can relax! We’ll take care of delivery of your tech item!"
        />
      </Container>
    </StyledWalkthrough>
  );
};
