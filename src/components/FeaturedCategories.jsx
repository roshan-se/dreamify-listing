import React from 'react';
import FeaturedCard from './cards/FeaturedCard';
import featHotel from '../assets/feat-hotel.jpg';
import featFood from '../assets/feat-food.jpg';
import featShop from '../assets/feat-shop.jpg';
import featEntertainment from '../assets/feat-entertainment.jpg';
import featParking from '../assets/feat-parking.jpg';
import featOutdoor from '../assets/feat-outdoor.jpg';

const categories = [
	{
		id: 1,
		name: 'Hotel & Hostel',
		locations: '4',
		featuredImage: featHotel,
	},
	{
		id: 2,
		name: 'Food & Drink',
		locations: '6',
		featuredImage: featFood
	},
	{
		id: 3,
		name: 'Shop & Store',
		locations: '2',
		featuredImage: featShop,
	},
	{
		id: 4,
		name: 'Entertainment',
		locations: '1',
		featuredImage: featEntertainment,
	},
	{
		id: 5,
		name: 'Parking',
		locations: '1',
		featuredImage: featParking,
	},
	{
		id: 6,
		name: 'Outdoor',
		locations: '2',
		featuredImage: featOutdoor,
	},
];

const FeaturedCategories = () => {
	return (
		<div className="container my-6 md:my-24">
			<h3 className="text-5xl md:text-9xl text-[#e7e7ed] text-center font-black opacity-40 z-[-1]">
				Featured
			</h3>
			<h2 className="relative text-4xl text-secondary text-center font-semibold mb-2 -mt-4 md:-mt-14">
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
