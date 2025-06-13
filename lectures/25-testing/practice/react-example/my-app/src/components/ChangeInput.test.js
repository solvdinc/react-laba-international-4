import React from 'react';
import ChangeInput from './ChangeInput';
import {render, fireEvent, cleanup, screen} from '@testing-library/react';

afterEach(cleanup);

test('displays the correct greeting', () => {
    render(<ChangeInput />)

    const input = screen.getByLabelText("user-name")
    const greeting = screen.getByTestId("change-input-greeting")

    expect(input.value).toBe('');
    expect(greeting.textContent).toBe("Welcome, Anonymous User!")

    fireEvent.change(input, {target: { value: "Vlad" }})
    expect(input.value).toBe('Vlad');
    expect(greeting.textContent).toBe("Welcome, Vlad!")
});
