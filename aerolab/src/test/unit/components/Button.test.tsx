import { render } from "@testing-library/react";
import { Button } from "@/components/Button";

describe("Componente Button", () => {
  test("se renderiza correctamente", () => {
    const { container } = render(
      <Button className="clase">soy el boton</Button>
    );

    expect(container).toMatchSnapshot();
  });
});
