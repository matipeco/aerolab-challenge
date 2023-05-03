import { render } from "@testing-library/react";
import { Button } from "@/components/Button";

describe("Componente Button", () => {
  test("Se renderiza correctamente", () => {
    const { container } = render(<Button className="clase">boton</Button>);

    expect(container).toMatchSnapshot();
  });

  test("Agrega la clase pending", () => {
    const { container } = render(
      <Button className="classname" isPending>
        boton
      </Button>
    );

    expect(container).toMatchSnapshot();
  });

  test("Agrega la clase disabled", () => {
    const { container } = render(
      <Button className="classname" disabled>
        boton
      </Button>
    );

    expect(container).toMatchSnapshot();
  });
});
