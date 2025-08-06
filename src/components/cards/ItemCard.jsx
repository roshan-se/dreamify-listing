import React from 'react';
import { VscHeart, VscLocation } from 'react-icons/vsc';
import { MdOutlineKingBed } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import { IoLocationOutline } from 'react-icons/io5';
import { HiOutlinePhone } from 'react-icons/hi';

const ItemCard = () => {
	return (
		<div className="relative border shadow-md rounded-md overflow-hidden">
			<header className="relative min-h-[60px] group">
				<a
					href="/"
					className="relative w-full flex flex-col pt-[66%] overflow-hidden"
				>
					{/* Rating and Views */}
					<div className="absolute top-2.5 left-2.5 z-10 flex items-center">
						<div className="text-xs flex text-white items-center border border-white rounded-sm px-2 py-0.5 mr-2">
							<AiOutlineEye color="#fff" size="1.2em" />
							<span className="ml-1">32,376</span>
						</div>
						<div className="">
							<VscHeart color="#fff" />
						</div>
					</div>
					{/* Item Image Placeholder */}
					<div className="absolute top-0 bottom-0 left-0 right-0 object-cover">
						<img
							src="./hotel-barahi.jpg"
							alt="Hotel Barahi Frontyard"
							className="w-full h-full group-hover:scale-110 transition-transform ease-in-out duration-300"
						/>
					</div>
					<div className="bg-black/20 z-0 absolute top-0 bottom-0 right-0 left-0 opacity-0 group-hover:opacity-100"></div>

					<div className="absolute bottom-2.5 right-2.5">
						<h3 className="text-white">8.9</h3>
					</div>
				</a>
			</header>

			{/* Product Content */}
			<div className="relative  z-10">
				<div className="px-4 pb-4">
					<div className="relative logo-overlay z-10 -mt-6 w-[100px] h-12">
						<div className="absolute block w-12 h-12 top-2.5 left-4 rounded-full overflow-hidden ">
							<img
								src="./barahi-logo.png"
								alt="Hotel Barahi Logo"
							/>
						</div>
					</div>
					<div className="relative">
						<h3 className="relative text-base font-semibold mt-5">
							Pear Palace Hotel
						</h3>
						<p className="text-sm text-neutral truncate mb-2">
							Become a witness of the past with a stay in o
						</p>
						<div className="flex item-center mb-3">
							<IoLocationOutline
								size="1em"
								color="#D81F7C"
								className="-ml-0.5"
							/>
							<span className="text-xs ml-1">
								Pera Palace hotel,Pokhara, Nepal
							</span>
						</div>
						<div className="flex item-center mb-2">
							<HiOutlinePhone size="0.9em" color="#D81F7C" />
							<span className="text-xs ml-1">9817102037</span>
						</div>
					</div>
				</div>

				{/* Card Footer */}
				<div className="flex items-center justify-between py-2.5 px-4 border-t">
					{/* Category */}
					<div className="flex items-center text-neutral">
						<div className="w-9 h-9 flex justify-center items-center rounded-full bg-[#D81F7C] mr-2">
							<MdOutlineKingBed color="#fff" size="1.5em" />
						</div>

						<span>Hotel</span>
					</div>
					{/* Search and Love React */}
					<div className="flex items-center text-neutral">
						<button>
							<BiSearchAlt size="1.2em" />
						</button>
						<button className="ml-4">
							<VscHeart size="1.2em" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
