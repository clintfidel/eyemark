import { render } from "@testing-library/react";
import { Screen5 } from ".";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: key => key })
}));

test("renders Project/Screen5", () => {
  render(<Screen5 />);
});
