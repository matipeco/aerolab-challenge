import { render } from "@testing-library/react";
import { Hero } from "@/components/Hero";

describe("Componente Hero", () => {
  test("Se renderiza correctamente", () => {
    const { container } = render(<Hero />);

    expect(container).toMatchSnapshot();
  });
});
