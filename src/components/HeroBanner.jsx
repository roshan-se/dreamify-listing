import React from 'react';

const style = {
	bannerHeight: `h-[600px] flex flex-col items-center justify-center bg-center bg-no-repeat bg-cover bg-[url('/hero-banner-listing.jpg')]`,
};

const HeroBanner = () => {
	return (
		<div className={style.bannerHeight}>
			<h1 data-aos="fade-up"
				data-aos-delay="100"
				data-aos-duration="600" className="text-2xl md:text-5xl text-white text-center">
				Find the best place to be
			</h1>
			<p data-aos="fade-up"
				data-aos-delay="300"
				data-aos-duration="600" className="text-sm md:text-lg text-white text-center">
				ListingEasy is the hassle-free way of discovering the city
			</p>

			{/* Search Bar */}
			<div data-aos="fade-up"
				data-aos-delay="500"
				data-aos-duration="800" className="md:bg-white rounded-full md:overflow-hidden w-full md:w-4/5 lg:w-3/5 px-4 md:px-0 md:mx-auto mt-10">
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
							<option value="">Hotel</option>
							<option value="">Restaurant</option>
							<option value="">Food & Drink</option>
							<option value="">Shops</option>
							<option value="">Parking</option>
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
			<div data-aos="fade-up"
				data-aos-delay="700"
				data-aos-duration="800" className="flex flex-wrap justify-center items-center gap-x-4 text-white text-sm mt-4">
				<h3 className="">Popular searches:</h3>
				<ul className="flex flex-wrap items-center gap-x-4">
					<li data-aos="fade-left" data-aos-delay="900">Food & Drinks</li>
					<li data-aos="fade-left" data-aos-delay="950">Hotel & Hostel</li>
					<li data-aos="fade-left" data-aos-delay="1000">OutDoor</li>
				</ul>
			</div>
		</div>
	);
};

export default HeroBanner;
