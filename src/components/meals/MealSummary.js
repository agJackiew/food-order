import styles from './MealSummary.module.scss';

const MealSummary = () => {
	return (
		<section className={styles.summary}>
			<h2>Delicious Korean meals</h2>
			<p>
				Choose, order and enjoy!.
			</p>
			<p>
				All meals are super spicy!
			</p>
		</section>
	);
}

export default MealSummary;