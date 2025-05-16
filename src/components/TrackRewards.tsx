import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TrackRewards = () => {
	return (
		<section id="track-rewards" className="py-12">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<div className="space-y-4">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-800">
							Track and Use Your Rewards
						</h2>
						<p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Check your tier and rewards anytime in the Origins App, on our
							website, or by asking a team member at checkout.
						</p>
						<p className="text-gray-600">
							We'll keep you updated on your progress and let you know when you
							reach a new tier!
						</p>
						<div className="flex flex-col sm:flex-row gap-4 pt-4">
							<Button className="bg-black hover:bg-gray-800 text-white flex items-center gap-2">
								<svg
									className="w-5 h-5"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 8.42 7.31c1.33.07 2.21.78 3.33.78 1.06 0 1.73-.78 3.28-.78 2.65.11 3.93 2.11 3.93 2.11s-2.38 1.34-2.38 4.05c0 3.22 2.76 4.27 2.76 4.27-.65 1.87-1.78 2.12-2.29 2.54z" />
									<path d="M12.77 4.7c.7-.93 1.17-2.29.96-3.7-2.1.17-3.83 1.53-4.41 3.22-.52 1.33-.03 2.88.68 3.77.62.76 1.97 1.39 2.77-.29z" />
								</svg>
								App Store
							</Button>
							<Button className="bg-black hover:bg-gray-800 text-white flex items-center gap-2">
								<svg
									className="w-5 h-5"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M3.172 4.172a2 2 0 012.828 0l9.192 9.192-9.192 9.192a2 2 0 11-2.828-2.828L8.586 15 3.172 9.586a2 2 0 010-2.828z" />
									<path d="M17.657 4.172a2 2 0 10-2.828 0l-9.192 9.192 9.192 9.192a2 2 0 102.828-2.828L12.414 15l5.414-5.414a2 2 0 000-2.828z" />
								</svg>
								Google Play
							</Button>
						</div>
					</div>
					<div className="bg-amber-50 p-8 rounded-lg border border-amber-100">
						<div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
							<div className="space-y-6">
								<div className="text-center">
									<div className="h-20 w-20 bg-amber-100 rounded-full mx-auto flex items-center justify-center">
										<span className=" font-bold text-xl">85%</span>
									</div>
									<h3 className="mt-4 font-bold text-gray-800">
										Heavy Hitter Progress
									</h3>
									<p className="text-sm text-gray-500">3,400 / 4,000 points</p>
								</div>
								<div className="space-y-2">
									<div className="flex justify-between text-sm">
										<span className="text-gray-600">Current Status</span>
										<span className="font-medium text-gray-800">
											Smooth & Mellow
										</span>
									</div>
									<div className="flex justify-between text-sm">
										<span className="text-gray-600">Next Reward</span>
										<span className="font-medium text-gray-800">
											600 points away
										</span>
									</div>
									<div className="flex justify-between text-sm">
										<span className="text-gray-600">Reward Expiry</span>
										<span className="font-medium text-gray-800">
											March 1, 2027
										</span>
									</div>
								</div>
								<div className="pt-4">
									<Button className="w-full bg-purple-700 hover:bg-purple-800">
										View Full Details
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TrackRewards;
