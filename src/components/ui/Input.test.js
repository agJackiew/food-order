import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

let value = 0;

const changeValueHandler = (e) => {
	value = e.target.value
}

describe("Input...", () => {
	it("is rendered", () => {
		render(<Input 
				id='1'
				label="Amount"
				type='number'
			/>);
		const inputElement = screen.getByLabelText('Amount');
		expect(inputElement).toBeInTheDocument();
	}),
	it("displays correct value when user types", () => {
		render(<Input 
				id='1'
				label="Amount"
				type='number'
			/>);
		const inputElement = screen.getByLabelText('Amount');
		userEvent.type(inputElement, '3');
		expect(inputElement).toHaveValue(3);
	})
});