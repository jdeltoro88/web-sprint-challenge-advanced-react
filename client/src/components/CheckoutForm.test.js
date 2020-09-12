import React from "react";
import { render } from "@testing-library/react";
import {findByTestId} from '@testing-library/react'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows






test("form header renders", () => {
    const {getByText} = render (<CheckoutForm/>)
    const header = getByText (/Checkout Form/i)
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const { getByTestId } = render (<CheckoutForm/>)
    const successMessage = findByTestId (/successMessage/i)
    expect (successMessage).toBeTruthy;
});
