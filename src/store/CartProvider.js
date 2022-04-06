import { useReducer } from 'react';

import CartCtx from './cart-context';

const initialState = {
	items: [],
	total: 0
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD') {
		const newTotal = state.total + (action.item.amount * action.item.price);
		const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
		const existingItem = state.items[existingItemIndex];
		let newItems;

		if (existingItem) {
			let updatedItem = {
				...existingItem,
				amount: existingItem.amount + action.item.amount
			}

			newItems = [...state.items];
			newItems[existingItemIndex] = updatedItem;
		}

		else  {
			newItems = state.items.concat(action.item);
		}
		return {
			items: newItems,
			total: newTotal
		}
	}

	if (action.type === 'REMOVE') {
		const existingItemIndex = state.items.findIndex(item => item.id === action.id);
		const existingItem = state.items[existingItemIndex];
		const newTotal = state.total - existingItem.price;

		let newItems;

		if (existingItem.amount === 1) {
			newItems = state.items.filter(item => item.id !== action.id);
		}
		else {
		    const newItem = {...existingItem, amount: existingItem.amount - 1};
		    newItems = [...state.items];
		    newItems[existingItemIndex] = newItem; 
		}

		return {
			items: newItems,
			total: newTotal
		}
	}
	return initialState;
}

const CartProvider = (props) => {

	const [cartState, dispatch] = useReducer(cartReducer, initialState);

	const addItemHandler = (item) => {
		dispatch({
			type: 'ADD',
			item: item
		})
	};

	const removeItemHandler = (id) => {
		dispatch({
			type: 'REMOVE',
			id: id
		})
	};

	const ctx = {
		items: cartState.items,
		total: cartState.total,
		addItem: addItemHandler,
		removeItem: removeItemHandler
	};

	return <CartCtx.Provider value={ctx}>
		{props.children}
	</CartCtx.Provider>
};

export default CartProvider;