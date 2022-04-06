import { useContext, useEffect, useState } from 'react';

import styles from './HeaderCartButton.module.scss';
import CartCtx from '../../store/cart-context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
 
const HeaderCartButton = (props) => {

	const [animateBtn, setAnimateBtn] = useState(false);

	const ctx = useContext(CartCtx);

	const { items } = ctx;

	const itemsCount = items.reduce((current, item) => {
		return current + item.amount
	}, 0);

	const btnStyles = `${styles.button} ${animateBtn ? styles.bump : ''}`; 

	useEffect(() => {
		if (items.length === 0) {
			return;
		};
		setAnimateBtn(true);

		const timer = setTimeout(() => {
			setAnimateBtn(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		}; 
	}, [items]);

	return (
		<button className={btnStyles} onClick={props.onClick}>
			<span className={styles['icon']}>
				<FontAwesomeIcon icon={faCartShopping} />
			</span>
			<span>Cart</span>
			<span className={styles['badge']}>{itemsCount}</span>
		</button>
	)
}

export default HeaderCartButton;