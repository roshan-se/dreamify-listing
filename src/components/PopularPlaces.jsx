import React from 'react';
import PlaceCard from './cards/PlaceCard';

const lists = [1, 2, 3, 4, 5];

const PopularPlaces = () => {
	return (
		<div className="container my-6 md:my-24">
			<h3 data-aos="fade-up"
				data-aos-delay="50"
				data-aos-duration="800"
				data-aos-anchor-placement="top-bottom" className="text-5xl md:text-9xl text-[#e7e7ed] text-center font-black opacity-40 z-[-1]">
				Popular Places
			</h3>
			<h2 data-aos="fade-up"
				data-aos-delay="150"
				data-aos-duration="600"
				data-aos-anchor-placement="top-bottom" className="relative text-4xl text-secondary text-center font-semibold mb-14 -mt-4 md:-mt-14">
				Popular Places Around the Nepal
			</h2>

			<div className="grid grid-cols-10 gap-5">
				{lists.map((item, index) => (
					<div key={index} className="col-span-12 md:col-span-5 lg:col-span-2" data-aos="fade-up"
						data-aos-delay={250 + (index * 75)} // More compact staggered delay
						data-aos-duration="500"
						data-aos-anchor-placement="top-bottom"
						data-aos-easing="ease-out-cubic">
						<PlaceCard />
					</div>
				))}
			</div>
		</div>
	);
};

export default PopularPlaces;
