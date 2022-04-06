import React from 'react';
import styles from './Input.module.scss';

const Input = (props) => {
	return (
		<div className={styles.input}>
			<label className={styles.input__label} htmlFor={props.id}>{props.label}</label>
			<input className={styles.input__input} {...props} />
		</div>
	);
};

export default Input; 