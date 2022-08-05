import React from 'react';

const FeaturedCard = ({ data }) => {
	return (
		<div className="relative rounded-lg overflow-hidden w-full flex flex-col h-[270px] justify-center items-center group">
			<div className="absolute top-0 left-0 right-0 bottom-0 ">
				<img
					src={data.featuredImage}
					alt=""
					className="w-full h-full object-cover object-center"
				/>
			</div>
			{/* Overlay */}
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 group-hover:bg-black/60 transition-all ease-in-out duration-300"></div>
			<div className="relative flex flex-col justify-center items-center z-10 transition-all ease-in-out duration-300 group-hover:-translate-y-2">
				<h2 className="text-2xl font-bold text-white ">{data.name}</h2>
				<div className="w-fit mx-auto bg-primary text-sm capitalize text-white px-5 py-1 text-center rounded-full group-hover:mt-2 transition-all ease-in-out duration-300">
					{data.locations} locations
				</div>
			</div>
		</div>
	);
};

export default FeaturedCard;
