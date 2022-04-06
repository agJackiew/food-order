import { useContext } from 'react';

import styles from './Cart.module.scss';

import CartCtx from '../../store/cart-context';
import CartItem from './CartItem';
import Modal from '../ui/Modal/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {

	const ctx = useContext(CartCtx);

	const total = ctx.total.toFixed(2);

	const addToCartHandler = (item) => {
		console.log('add');
		ctx.addItem({...item, amount: 1});
	};

	const removeFromCartHandler = (id) => {
		console.log('remove');
		ctx.removeItem(id);
	};

	const cartItems = <ul className={styles['cart-items']}>
		{ctx.items.map(item => (
			<CartItem 
				key={item.id} 
				item={{...item}} 
				onAdd={addToCartHandler.bind(null, item)}
				onRemove={removeFromCartHandler.bind(null, item.id)}
			/>
		))}
	</ul>;


	return (
		<Modal onClick={props.onHideCart}>
			{cartItems}
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>{total}</span>
			</div>
			<div className={styles.actions}>
				<FontAwesomeIcon 
					className={styles['actions__close']} 
					icon={faRectangleXmark} 
					onClick={props.onHideCart}
				/>
				<button className={styles['actions__btn']}>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;