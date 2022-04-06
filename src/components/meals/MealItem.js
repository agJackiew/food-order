import { useContext } from 'react';

import styles from './MealItem.module.scss';

import MealItemForm from './MealItemForm';
import CartCtx from '../../store/cart-context';

const MealItem = (props) => {

	const ctx = useContext(CartCtx);

	const { id, name, description, price } = props.item;

	const addHandler = (amount) => {
		ctx.addItem({
			id: id,
			name: name,
			amount: amount,
			price: price
		})
	}

	return (
		<li className={styles['meal']}>
			<div>
				<h3 className={styles['meal__header']}>{name}</h3>
				<div className={styles['meal__description']}>{description}</div>
				<div className={styles['meal__price']}>{price.toFixed(2)}</div>
			</div>
			<div>
				 <MealItemForm id={id} onAdd={addHandler}/>
			</div>
		</li>
	)
}

export default MealItem;