import { Footer } from "@/components/Footer";
import { screen, render } from "@testing-library/react";

describe("Componente Footer", () => {
  test("Se renderiza correctamente", () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
  });
});
