import styles from './MealList.module.scss';

import MealItem from './MealItem';
import Card from '../ui/Card';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Kimchi',
    description: 'A korean specialty! Fermented spicy cabbage',
    price: 9.99,
  },
  {
    id: 'm2',
    name: 'Bulgogi',
    description: 'Korean beef BBQ',
    price: 26.99,
  },
  {
    id: 'm3',
    name: 'Bibimbap',
    description: 'Mixed rice with veggies and egg',
    price: 19.99,
  },
  {
    id: 'm4',
    name: 'Tteokbokki',
    description: 'Hot and spicy rice cake',
    price: 12.99,
  },
];

const MealList = () => {

	const meals = DUMMY_MEALS.map(item => 
		/*
		<MealItem 
			key={item.id}
			name={item.name}
			description={item.description}
			price={item.price}
		/>
		*/
		<MealItem 
			key={item.id}
			item={{
				id: item.id,
				name: item.name,
				description: item.description,
				price: item.price
			}}
		/>
	);

	return (
		<section className={styles.meals}>
			<Card>
				<ul className={styles.meals__list}>
					{meals}
				</ul>
			</Card>
		</section>
		
		
	);
}

export default MealList;