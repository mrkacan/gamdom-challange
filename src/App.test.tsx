import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

test("renders app correctly", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  expect(getByText(/Sports Betting/i)).toBeInTheDocument();
});
