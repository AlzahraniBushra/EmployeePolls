import * as React from "react";
import Nav from "../components/Nav";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

describe("Nav", () => {
    test("should render the links", async () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Nav />
                </Provider>
            </MemoryRouter>
        );

        const homeLink = screen.getByText(/home/i);
        const leaderboardLink = screen.getByText(/leaderboard/i);
        const newLink = screen.getByText(/new/i);
        
        expect(homeLink).toBeInTheDocument();
        expect(newLink).toBeInTheDocument();
        expect(leaderboardLink).toBeInTheDocument();
    });
});

// eslint-disable-next-line jest/no-identical-title
describe("Nav", () => {
    test("should match snapshot", async () => {
        const view = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Nav />
                </Provider>
            </MemoryRouter>
        );

        expect(view).toMatchSnapshot();
    });
});
