import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeaderCartButton from './HeaderCartButton';

describe("Cart Button...", () => {
	it("is rendered", () => {
		render(<HeaderCartButton />);
		const buttonElement = screen.getByRole('button');
		expect(buttonElement).toBeInTheDocument();
	});
});