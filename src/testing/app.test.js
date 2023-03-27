import * as React from "react";
import App from "../components/App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

describe("App", () => {
    test("should display login page", async () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        );

        const options = screen.getByText(/Select user/i);
        expect(options).toBeInTheDocument();
    });
});