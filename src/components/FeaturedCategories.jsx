import React from 'react';
import FeaturedCard from './cards/FeaturedCard';

const categories = [
	{
		id: 1,
		name: 'Hotel & Hostel',
		locations: '4',
		featuredImage:
			'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/category_hotel_hostel_bg-450x600.jpg',
	},
	{
		id: 2,
		name: 'Food & Drink',
		locations: '6',
		featuredImage:
			'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/category_food_drink_bg-450x675.jpg',
	},
	{
		id: 3,
		name: 'Shop & Store',
		locations: '2',
		featuredImage:
			'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/category_shop_store_bg-450x300.jpg',
	},
	{
		id: 4,
		name: 'Entertainment',
		locations: '1',
		featuredImage:
			'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/category_entertainment-450x300.jpg',
	},
	{
		id: 5,
		name: 'Parking',
		locations: '1',
		featuredImage:
			'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/category_parking-450x300.jpg',
	},
	{
		id: 6,
		name: 'Outdoor',
		locations: '2',
		featuredImage:
			'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/category_outdoor-450x300.jpg',
	},
];

const FeaturedCategories = () => {
	return (
		<div className="container my-6 md:my-16">
			<h2 className="text-4xl text-secondary text-center">
				Featured Categories
			</h2>
			<p className="text-center">
				Discover New York’s best things to do, restaurants, theatre, nightlife
				and more
			</p>
			<div className="mt-10 grid grid-cols-12 gap-6">
				{categories.map((category, index) => (
					<div
						className={`col-span-12  ${
							index === 0 || index === categories.length - 1
								? 'md:col-span-6'
								: 'md:col-span-3'
						}`}
						key={index}
					>
						<FeaturedCard data={category} />
					</div>
				))}
			</div>
		</div>
	);
};

export default FeaturedCategories;
