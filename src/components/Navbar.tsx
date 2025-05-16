import React from 'react';
import { AppWindow } from 'lucide-react';
import Logo from '../assets/logo.svg';

const Navbar = () => {
	return (
		<header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					{/* Logo aligned left */}

					{/* Centered menu */}
					<nav className="hidden md:flex flex-1 justify-center items-center gap-10">
						<a href="/" className="flex items-center gap-2">
							{/* <div className="rounded bg-gray-100 p-2">
							<AppWindow className="h-6 w-6 text-purple-700" />
						</div> */}
							<img src={Logo} className="h-[50px]" />
						</a>
						<a
							href="#"
							className="text-base font-medium text-gray-700 hover:text-purple-700 transition-colors"
						>
							Shop
						</a>
						<a
							href="#"
							className="text-base font-medium text-gray-700 hover:text-purple-700 transition-colors"
						>
							About
						</a>
						<a
							href="#"
							className="text-base font-medium text-gray-700 hover:text-purple-700 transition-colors"
						>
							Blog
						</a>
						<a
							href="#"
							className="text-base font-semibold text-purple-700 relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-full after:bg-purple-200 after:rounded transition-colors"
						>
							Loyalty Program
						</a>
					</nav>

					{/* Hamburger menu */}
					<button className="md:hidden p-2 rounded bg-gray-100 text-purple-700 hover:bg-gray-200 transition-colors">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="h-5 w-5"
						>
							<line x1="4" x2="20" y1="12" y2="12" />
							<line x1="4" x2="20" y1="6" y2="6" />
							<line x1="4" x2="20" y1="18" y2="18" />
						</svg>
						<span className="sr-only">Toggle menu</span>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
