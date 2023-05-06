import { WalkthroughCard } from "@/components/WalkthroughCard";
import { render } from "@testing-library/react";

describe("Componente WalkthroughCard", () => {
  test("Se renderiza correctamente", () => {
    const { container } = render(
      <WalkthroughCard
        image="/imagen.png"
        icon="/icon.png"
        title="titulo"
        description="saraasa description"
      />
    );

    expect(container).toMatchSnapshot();
  });
});
