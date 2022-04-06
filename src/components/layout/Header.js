import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';

import styles from './Header.module.scss';

import foodImg from '../../assets/food.jpg';

const Header = (props) => {
	return (
		<Fragment>
			<header className={styles['header']}>
				<h1>Korean Meals</h1>
				<HeaderCartButton onClick={props.onShowCart}/>
			</header>
			<div className={styles['header__image']}>
				<img src={foodImg} alt="Kimchi" />
			</div>
		</Fragment>
	);
};

export default Header;