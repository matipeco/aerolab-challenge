import { ProductCard } from "@/components/ProductCard";
import { render } from "@testing-library/react";

describe("Componente ProductCard", () => {
  test("Se renderiza correctamente", () => {
    const { container } = render(
      <ProductCard
        image="/imagen.png"
        category="phone"
        cost={2300}
        id="id324243"
        name="iphone7"
      />
    );

    expect(container).toMatchSnapshot();
  });
});
