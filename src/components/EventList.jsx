import React from 'react';
import EventCard from './cards/EventCard';

const lists = [1, 2, 3, 4];

const EventList = () => {
	return (
		<div className="container my-6 md:my-24">
			<h3 data-aos="fade-up"
				data-aos-delay="50"
				data-aos-duration="800"
				data-aos-anchor-placement="top-bottom" className="text-5xl md:text-9xl text-[#e7e7ed] text-center font-black opacity-40 z-[-1]">
				Events
			</h3>
			<h2 data-aos="fade-up"
				data-aos-delay="150"
				data-aos-duration="600"
				data-aos-anchor-placement="top-bottom" className="relative text-4xl text-secondary text-center font-semibold mb-2 -mt-4 md:-mt-14">
				Events for you
			</h2>
			<h3 data-aos="fade-up"
				data-aos-delay="250"
				data-aos-duration="600"
				data-aos-anchor-placement="top-bottom" className="text-lg text-neutral text-center mb-8">
				Discover upcoming and ongoing events near by you.
			</h3>

			<div className="grid grid-cols-12  gap-y-8 md:gap-8">
				{lists.map((item, index) => (
					<div key={index} className="col-span-12 md:col-span-4 lg:col-span-3" data-aos="zoom-in"
						data-aos-delay={350 + (index * 100)}
						data-aos-duration="500"
						data-aos-anchor-placement="top-bottom"
						data-aos-easing="ease-out-back">
						<EventCard />
					</div>
				))}
			</div>
		</div>
	);
};

export default EventList;
