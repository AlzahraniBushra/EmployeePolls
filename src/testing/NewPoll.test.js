import * as React from "react";
import { render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import store from "../store";
import { fireEvent } from '@testing-library/react';
import NewPoll from '../components/NewPoll';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


const view = render(
    <Provider store={store}>
        <BrowserRouter>
            <NewPoll />
        </BrowserRouter>
    </Provider>
);

const inputOne = screen.getByTestId('test-opOne');
const inputTwo = screen.getByTestId('test-opTwo');
const submitBtn = screen.getByTestId('test-btn');






describe('NewPoll', () => {
    it('should add new poll', async () => {

        fireEvent.change(inputOne, { target: { value: 'Hi' } });
        fireEvent.change(inputTwo, { target: { value: 'Hello' } });
        fireEvent.click(submitBtn);
        expect(screen.getByTestId('undone-polls')).toBeInTheDocument();
       
    });

    it('should match the snapshot when fields are not passed', () => {
        expect(view).toMatchSnapshot();
    });

    it('should match the snapshot when fields are passed', () => {
        fireEvent.change(inputOne, { target: { value: 'Hi' } });
        fireEvent.change(inputTwo, { target: { value: 'Hello' } });
        expect(view).toMatchSnapshot();
    });
});