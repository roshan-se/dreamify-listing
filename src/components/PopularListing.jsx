import React from 'react';
import ItemCard from './cards/ItemCard';

const lists = [1, 2, 3, 4];

const PopularListing = () => {
	return (
		<div className="container my-6 md:my-24">
			<h3 data-aos="fade-up"
				data-aos-delay="50"
				data-aos-duration="800"
				data-aos-anchor-placement="top-bottom" className="text-5xl md:text-9xl text-[#e7e7ed] text-center font-black opacity-40 z-[-1]">
				Popular
			</h3>
			<h2 data-aos="fade-up"
				data-aos-delay="150"
				data-aos-duration="600"
				data-aos-anchor-placement="top-bottom" className="relative text-4xl text-secondary text-center font-semibold mb-2 -mt-4 md:-mt-14">
				Popular Listing
			</h2>
			<h3 data-aos="fade-up"
				data-aos-delay="250"
				data-aos-duration="600"
				data-aos-anchor-placement="top-bottom" className="relative text-lg text-neutral text-center mb-8">
				Explore the greates places in the city. You won’t be disappointed.
			</h3>

			<div className="grid grid-cols-12 gap-5">
				{lists.map((item, index) => (
					<div key={index} className="col-span-12 md:col-span-4 lg:col-span-3" data-aos="fade-up"
						data-aos-delay={300 + (index * 100)} // Staggered delay
						data-aos-duration="600"
						data-aos-anchor-placement="top-bottom">
						<ItemCard />
					</div>
				))}
			</div>
		</div>
	);
};

export default PopularListing;
