import React from 'react';
import FocusInput from './FocusInput';
import {render, fireEvent, cleanup, screen} from '@testing-library/react';

afterEach(cleanup);

test('clicking on button trigger focus on input', () => {
    render(<FocusInput />)
    fireEvent.click(screen.getByText('Click to Focus'))

    expect(document.activeElement).toBe(screen.getByPlaceholderText("Focus me!"))
});
