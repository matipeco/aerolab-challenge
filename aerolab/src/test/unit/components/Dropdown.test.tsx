import { Dropdown } from "@/components/Dropdown";
import { render, screen, act } from "@testing-library/react";

describe("Componente Dropdown", () => {
  test("Se renderiza correctamente", () => {
    const { container } = render(<Dropdown />);

    expect(container).toMatchSnapshot();
  });

  test("Se abre el desplegable", () => {
    render(<Dropdown />);

    const button = screen.getByRole("button", { name: "1456" });
    expect(screen.queryByText("Add Balance")).not.toBeInTheDocument();

    act(() => {
      button.click();
    });

    expect(screen.getByText("Add Balance")).toBeVisible();

    act(() => {
      button.click();
    });

    expect(screen.queryByText("Add Balance")).not.toBeInTheDocument();
  });
});
