import React from 'react';
import { VscHeart, VscLocation } from 'react-icons/vsc';
import { MdOutlineKingBed } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import { IoLocationOutline, IoStarOutline } from 'react-icons/io5';
import { HiOutlinePhone } from 'react-icons/hi';

const EventCard = () => {
	return (
		<div className="relative border shadow-md rounded-md overflow-hidden">
			<header className="relative min-h-[60px] group">
				<a
					href="/"
					className="relative w-full flex flex-col pt-[60%] overflow-hidden"
				>
					{/* Item Image Placeholder */}
					<div className="absolute top-0 bottom-0 left-0 right-0 object-cover">
						<img
							src="./food-tour.jpg"
							alt=""
							className="w-full h-full group-hover:scale-110 transition-transform ease-in-out duration-300"
						/>
					</div>
					<div className="bg-black/20 z-0 absolute top-0 bottom-0 right-0 left-0 opacity-0 group-hover:opacity-100"></div>
				</a>
			</header>

			{/* Product Content */}
			<div className="relative  z-10">
				<div className="relative px-4 pb-4 flex mt-5">
					{/* Event Date */}
					<div className="py-2.5 mr-4 text-center">
						<div className="text-xs text-primary">AUG</div>
						<div className="text-2xl">08</div>
					</div>
					<div className="relative">
						<h3 className="relative text-base font-semibold mb-1">
							Secret Food Tours Pokhara
						</h3>
						<p className="text-xs text-neutral truncate mb-1">
							08/08/2025 - 06/13/2026
						</p>
						<p className="text-xs text-neutral truncate mb-1">
							Pokhara, Nepal
						</p>
						<p className="text-xs text-neutral truncate mb-1">
							24 people interested
						</p>
					</div>
				</div>

				{/* Card Footer */}
				<div className="flex items-center justify-between text-xs py-2.5 px-4 border-t">
					{/* Category */}
					<div className="text-neutral">Hosted By admin</div>
					{/* Search and Love React */}

					<button className="ml-4">
						<IoStarOutline size="1.5em" color="#70778b" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
