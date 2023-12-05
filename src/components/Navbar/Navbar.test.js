import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './Navbar';

describe("<Navbar />", () => {

    test("renders the Navbar component", () => {
        render(<Router><Navbar /></Router>);
        const NavExpandedElement = screen.getByText(/Restaurant/i);
        expect(NavExpandedElement).toBeInTheDocument();
    });

    test("display menu when the button is clicked", () => {
        render(<Router><Navbar /></Router>);
        const buttonElement = screen.getByRole("button", /button/i);

        fireEvent.click(buttonElement);
        
        const showMenu = screen.getByTestId("menu");
        expect(showMenu).toBeVisible();
    })
})