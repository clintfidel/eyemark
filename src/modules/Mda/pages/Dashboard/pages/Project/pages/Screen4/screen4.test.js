import { render } from "@testing-library/react";
import { Screen4 } from ".";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: key => key })
}));

test("renders Project/Screen4", () => {
  render(<Screen4 />);
});
