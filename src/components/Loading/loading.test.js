import { render } from "@testing-library/react";
import Loading from ".";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: key => key })
}));

test("renders Loading", () => {
  render(<Loading />);
});
