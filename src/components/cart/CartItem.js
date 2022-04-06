import styles from './CartItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';


const CardItem = (props) => {
	return (
		<li>
			<div className={styles.item}>
				<h3>{props.item.name}</h3>
				<div className={styles.item__details}>
					<span className={styles.item__price}>{props.item.price}</span>
					<span className={styles.item__amount}>{props.item.amount}</span>
				</div>				
			</div>
			<div className={styles.actions}>
				<FontAwesomeIcon icon={faCirclePlus} onClick={props.onAdd}/>	
				<FontAwesomeIcon icon={faCircleMinus} onClick={props.onRemove}/>
			</div>
		</li>
	)
}

export default CardItem;