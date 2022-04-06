import { createContext } from 'react';

const CartCtx = createContext({
	items: [],
	total: 0,
	addItem: (item) => {},
	removeItem: (id) => {}
});

export default CartCtx;