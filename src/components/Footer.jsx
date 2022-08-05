import React from 'react';
import logo from '../assets/Dreamify.png';
import { BsEnvelope } from 'react-icons/bs';

const Footer = () => {
	return (
		<footer className="bg-[#252C41]">
			<div className="container py-10">
				<div className="grid grid-cols-12 gap-y-5 lg:gap-y-0">
					<div className="col-span-12 md:col-span-4 lg:col-span-3">
						<img src={logo} alt="" className="w-40" />
					</div>
					<div className="col-span-6 md:col-span-4 lg:col-span-3">
						<h3 className="text-sm font-semibold text-white/80 mb-4">
							Discover
						</h3>
						<ul className="text-sm text-neutral space-y-2">
							<li>Term of use</li>
							<li>Privacy</li>
							<li>Rewards</li>
							<li>Create Collections</li>
							<li>Write a review</li>
							<li>Mobile Apps</li>
						</ul>
					</div>
					<div className="col-span-6 md:col-span-4 lg:col-span-3">
						<h3 className="text-sm font-semibold text-white/80 mb-4">
							Company
						</h3>
						<ul className="text-sm text-neutral space-y-2">
							<li>About us</li>
							<li>Support</li>
							<li>Jobs</li>
							<li>Investors</li>
							<li>Regulations</li>
							<li>Contact</li>
						</ul>
					</div>
					<div className="col-span-12 md:col-span-6 lg:col-span-3">
						<h3 className="text-sm font-semibold text-white/80 mb-4">
							Join us on
						</h3>
						<p className="text-sm text-neutral">
							We don’t send spam so don’t worry.
						</p>
						<form className="mt-4">
							<div className="bg-white rounded-sm flex items-center justify-between pl-4 pr-2 py-1.5">
								<input type="text" className="flex-1 focus:outline-none" />
								<button
									type="submit"
									className="bg-primary text-white rounded-sm py-2 px-4"
								>
									<BsEnvelope />
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="border-t border-[#ffffff50]">
				<div className="container py-5">
					<p className="text-xs text-center text-neutral">
						Copyright © 2022 Dreamify Listing
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
