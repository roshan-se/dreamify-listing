import React, { useEffect, useState } from 'react';
import logo from '../assets/Dreamify.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';

const Navbar = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [menuToggle, setMenuToggle] = useState(false);

	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	const handleScreenSize = () => {
		const screen = window.innerWidth;
		setScreenSize(screen);
		if (screen > 767) {
			setMenuToggle(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleScreenSize);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScreenSize);
		};
	}, []);

	return (
		<div>
			<header
				className={`fixed left-0 right-0 z-50 transition-colors ease-in-out duration-150 ${
					scrollPosition > 100 ? 'bg-white/90' : ''
				}`}
			>
				<div className="container">
					<div className="flex justify-between items-center">
						<div>
							<img src={logo} alt="" className="w-24" />
						</div>
						<div className="hidden md:block">
							<ul
								className={`flex items-center text-base ${
									scrollPosition > 100 ? 'text-black' : 'text-white'
								} font-semibold text-neutral space-x-10`}
							>
								<li>About us</li>
								<li>Support</li>
								<li>Jobs</li>
								<li>Investors</li>
								<li>Regulations</li>
								<li>Contact</li>
							</ul>
						</div>

						{/* Hamburger Icons */}
						<button
							className={`${
								scrollPosition > 100 ? 'text-black' : 'text-white'
							} block md:hidden`}
							onClick={() => setMenuToggle(!menuToggle)}
						>
							{menuToggle ? (
								<VscChromeClose size="1.5em" />
							) : (
								<GiHamburgerMenu size="1.5em" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Navbar Items */}
				<div
					className={`container bg-white py-4 ${
						menuToggle ? 'block opacity-100' : 'hidden opacity-0'
					}`}
				>
					<ul
						className={`flex flex-col text-base text-black font-semibold text-neutral space-y-5`}
					>
						<li>About us</li>
						<li>Support</li>
						<li>Jobs</li>
						<li>Investors</li>
						<li>Regulations</li>
						<li>Contact</li>
					</ul>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
