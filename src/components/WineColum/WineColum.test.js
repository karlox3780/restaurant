import { render, screen, fireEvent } from '@testing-library/react';

import WineColum from './WineColum';

describe("<WineColum />", () => {

    test("renders the WineColum component", () => {
        render(<WineColum />);
    });
})