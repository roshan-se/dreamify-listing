import React from 'react';
import EventCard from './cards/EventCard';

const lists = [1, 2, 3, 4];

const EventList = () => {
	return (
		<div className="container my-6 md:my-24">
			<h3 className="text-5xl md:text-9xl text-[#e7e7ed] text-center font-black opacity-40 z-[-1]">
				Events
			</h3>
			<h2 className="relative text-4xl text-secondary text-center font-semibold mb-2 -mt-4 md:-mt-14">
				Events for you
			</h2>
			<h3 className="text-lg text-neutral text-center mb-8">
				Discover upcoming and ongoing events near by you.
			</h3>

			<div className="grid grid-cols-12  gap-y-8 md:gap-8">
				{lists.map((item, index) => (
					<div key={index} className="col-span-12 md:col-span-4 lg:col-span-3">
						<EventCard />
					</div>
				))}
			</div>
		</div>
	);
};

export default EventList;
