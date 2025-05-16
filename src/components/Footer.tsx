import React from 'react';
import { AppWindow, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="space-y-4">
						<div className="flex items-center gap-2">
							<div className="rounded-md bg-white/10 p-2">
								<AppWindow className="h-6 w-6" />
							</div>
							<span className="text-xl font-bold">Origins</span>
						</div>
						<p className="text-gray-300 max-w-xs">
							Premium rewards for premium customers. Amplify your experience
							with every purchase.
						</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4 text-purple-300">
							Quick Links
						</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Shop
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white transition-colors"
								>
									About
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Blog
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Loyalty Program
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4 text-purple-300">
							Support
						</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Contact Us
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white transition-colors"
								>
									FAQs
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Store Locator
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Shipping & Returns
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4 text-purple-300">
							Legal
						</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Terms of Service
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Privacy Policy
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Cookie Settings
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-12 pt-8 border-t border-gray-800">
					<div className="flex flex-col md:flex-row items-center justify-between gap-6">
						<div className="flex items-center gap-4">
							<a
								href="#"
								className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full"
							>
								<Instagram className="h-5 w-5 text-purple-300" />
								<span className="sr-only">Instagram</span>
							</a>
							<a
								href="#"
								className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full"
							>
								<Twitter className="h-5 w-5 text-purple-300" />
								<span className="sr-only">Twitter</span>
							</a>
							<a
								href="#"
								className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full"
							>
								<Facebook className="h-5 w-5 text-purple-300" />
								<span className="sr-only">Facebook</span>
							</a>
						</div>

						<div className="flex flex-wrap justify-center md:justify-end gap-4">
							<a
								href="#"
								className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-lg"
							>
								<svg
									className="w-5 h-5"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 8.42 7.31c1.33.07 2.21.78 3.33.78 1.06 0 1.73-.78 3.28-.78 2.65.11 3.93 2.11 3.93 2.11s-2.38 1.34-2.38 4.05c0 3.22 2.76 4.27 2.76 4.27-.65 1.87-1.78 2.12-2.29 2.54z" />
									<path d="M12.77 4.7c.7-.93 1.17-2.29.96-3.7-2.1.17-3.83 1.53-4.41 3.22-.52 1.33-.03 2.88.68 3.77.62.76 1.97 1.39 2.77-.29z" />
								</svg>
								App Store
							</a>
							<a
								href="#"
								className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-lg"
							>
								<svg
									className="w-5 h-5"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M3.172 4.172a2 2 0 012.828 0l9.192 9.192-9.192 9.192a2 2 0 11-2.828-2.828L8.586 15 3.172 9.586a2 2 0 010-2.828z" />
									<path d="M17.657 4.172a2 2 0 10-2.828 0l-9.192 9.192 9.192 9.192a2 2 0 102.828-2.828L12.414 15l5.414-5.414a2 2 0 000-2.828z" />
								</svg>
								Google Play
							</a>
						</div>
					</div>

					<p className="text-gray-400 text-center mt-8">
						© 2025 Origins Enterprises LLC. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
