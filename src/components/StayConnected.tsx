import React from 'react';
import { Instagram, Twitter, Facebook, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StayConnected = () => {
	return (
		<section id="stay-connected" className="py-12 bg-gray-50">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<div className="flex flex-col items-center space-y-8">
					<div className="space-y-3 text-center">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-800">
							Stay Connected & Maximize Your Rewards
						</h2>
						<p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Download the Origins App to track points, get exclusive offers,
							and manage your rewards on the go!
						</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-4">
						<Button className="bg-black hover:bg-gray-800 text-white flex items-center gap-2">
							<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
								<path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 8.42 7.31c1.33.07 2.21.78 3.33.78 1.06 0 1.73-.78 3.28-.78 2.65.11 3.93 2.11 3.93 2.11s-2.38 1.34-2.38 4.05c0 3.22 2.76 4.27 2.76 4.27-.65 1.87-1.78 2.12-2.29 2.54z" />
								<path d="M12.77 4.7c.7-.93 1.17-2.29.96-3.7-2.1.17-3.83 1.53-4.41 3.22-.52 1.33-.03 2.88.68 3.77.62.76 1.97 1.39 2.77-.29z" />
							</svg>
							App Store
						</Button>
						<Button className="bg-black hover:bg-gray-800 text-white flex items-center gap-2">
							<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
								<path d="M3.172 4.172a2 2 0 012.828 0l9.192 9.192-9.192 9.192a2 2 0 11-2.828-2.828L8.586 15 3.172 9.586a2 2 0 010-2.828z" />
								<path d="M17.657 4.172a2 2 0 10-2.828 0l-9.192 9.192 9.192 9.192a2 2 0 102.828-2.828L12.414 15l5.414-5.414a2 2 0 000-2.828z" />
							</svg>
							Google Play
						</Button>
					</div>

					<div className="pt-8">
						<h3 className="text-xl font-semibold text-center mb-4 text-gray-700">
							Follow us for the latest deals, events, and more!
						</h3>
						<div className="flex justify-center gap-4">
							<a
								href="#"
								className="p-3 rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200 transition-colors"
							>
								<Instagram className="h-6 w-6" />
								<span className="sr-only">Instagram</span>
							</a>
							<a
								href="#"
								className="p-3 rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200 transition-colors"
							>
								<Twitter className="h-6 w-6" />
								<span className="sr-only">Twitter</span>
							</a>
							<a
								href="#"
								className="p-3 rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200 transition-colors"
							>
								<Facebook className="h-6 w-6" />
								<span className="sr-only">Facebook</span>
							</a>
						</div>
					</div>

					<div className="bg-amber-50 p-6 rounded-lg max-w-2xl w-full mt-8 border">
						<h3 className="text-xl font-bold mb-3 text-center text-gray-800">
							Need Help?
						</h3>
						<p className="text-center text-gray-600">
							Ask any team member about your status, how close you are to the
							next tier, or for help using your rewards. We're here to help you
							save more and enjoy more!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StayConnected;
