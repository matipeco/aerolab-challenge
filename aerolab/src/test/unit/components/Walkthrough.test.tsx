import { Walkthrough } from "@/components/Walkthrough";
import { render } from "@testing-library/react";

// jest.mock("../../../components/WalkthroughCard", () => {
//   return {
//     WalkthroughCard: () => "article",
//   };
// });
describe("Componente Walkthrough", () => {
  test("Se renderiza correctamente", () => {
    const { container } = render(<Walkthrough />);

    expect(container).toMatchSnapshot();
  });
});
