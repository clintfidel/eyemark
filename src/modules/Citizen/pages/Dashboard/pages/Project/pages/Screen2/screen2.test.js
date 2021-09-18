import { render } from "@testing-library/react";
import { Screen2 } from ".";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: key => key })
}));

test("renders Project/Screen2", () => {
  render(<Screen2 />);
});
