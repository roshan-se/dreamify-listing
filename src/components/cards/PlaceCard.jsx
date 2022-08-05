import React from 'react';
import { FiEdit } from 'react-icons/fi';

const PlaceCard = () => {
	return (
		<div className="relative pt-[144%] overflow-hidden group">
			<div className="absolute top-0 left-0 bottom-0 right-0">
				<img
					src="https://wilcity.com/wp-content/uploads/2020/07/wct013-800x1200.jpg"
					alt=""
					className="w-full h-full object-cover group-hover:scale-105 transition-transform ease-in-out duration-300"
				/>
			</div>

			<div className="absolute text-white z-10 top-5 text-center w-full">
				<div className="flex justify-center items-center">
					<FiEdit className="-mt-0.5 text-primary" />
					<span className="ml-1">20 Listing</span>
				</div>
			</div>
			<div className="absolute bottom-0 z-10 w-full flex flex-col p-5 transition-transform ease-in-out duration-300 lg:translate-y-20 group-hover:translate-y-0">
				<h3 className="text-center text-white text-3xl font-semibold mb-8">
					London
				</h3>
				<button className="bg-primary text-base font-semibold text-white py-3.5 px-5">
					Discover
				</button>
			</div>
			<div className="bg-black/20 transition-colors ease-in-out duration-300 z-0 absolute top-0 bottom-0 right-0 left-0 group-hover:bg-black/40"></div>
		</div>
	);
};

export default PlaceCard;
