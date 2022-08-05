import React from 'react';

const style = {
	bannerHeight: `h-[600px] flex flex-col items-center justify-center bg-center bg-no-repeat bg-cover bg-[url('https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/home_01.jpg?id=11691')]`,
};

const HeroBanner = () => {
	return (
		<div className={style.bannerHeight}>
			<h1 className="text-2xl md:text-5xl text-white text-center">
				Find the best place to be
			</h1>
			<p className="text-sm md:text-lg text-white text-center">
				ListingEasy is the hassle-free way of discovering the city
			</p>

			{/* Search Bar */}
			<div className="md:bg-white rounded-full md:overflow-hidden w-full md:w-4/5 lg:w-3/5 px-4 md:px-0 md:mx-auto mt-10">
				<form className="relative grid grid-cols-12 items-center gap-x-4 w-full">
					<div className="col-span-12 md:col-span-6 mb-2 md:mb-0">
						<input
							type="text"
							placeholder="What are you looking for?"
							className="w-full h-full px-4 py-2 border-r rounded-full md:rounded-none focus:outline-none"
						/>
					</div>
					<div className="col-span-12 md:col-span-3">
						<select
							name=""
							id=""
							className="w-full rounded-full bg-white px-4 py-2 focus:outline-none"
						>
							<option value="">Add Category</option>
						</select>
					</div>
					<div className="col-span-12 md:col-span-3 py-2 md:py-1.5 mr-1.5">
						<button className="w-full bg-primary text-white uppercase text-sm px-10 py-3 rounded-full">
							Search
						</button>
					</div>
				</form>
			</div>

			{/* Popular Search tags */}
			<div className="flex flex-wrap justify-center items-center gap-x-4 text-white text-sm mt-4">
				<h3 className="">Popular searches:</h3>
				<ul className="flex flex-wrap items-center gap-x-4">
					<li>Food & Drinks</li>
					<li>Hotel & Hostel</li>
					<li>OutDoor</li>
				</ul>
			</div>
		</div>
	);
};

export default HeroBanner;
