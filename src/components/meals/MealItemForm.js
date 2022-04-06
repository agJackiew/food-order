import { useState } from 'react';

import styles from './MealItemForm.module.scss';

import Input from '../ui/Input';

const MealItemForm = (props) => {

	const [inputValue, setInputValue] = useState('0');

	const changeValueHandler = (event) => {
		console.log(event.target.value);
		setInputValue(event.target.value);
	}

	const submitHandler = (event) => {
		event.preventDefault();
		const amount = +inputValue;
		props.onAdd(amount);
	}

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<Input 
				id={props.id}
				label="Amount"
				name="amount"
				type='number'
				min='1'
				max='6'
				step='1'
				value={inputValue}
				onChange={changeValueHandler}
			/>
			<button>+ Add</button>
		</form>
	);
}

export default MealItemForm;