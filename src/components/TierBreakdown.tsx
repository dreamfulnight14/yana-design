import React from 'react';
import { Check, Calendar, Trophy, Award } from 'lucide-react';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

const TierBreakdown = () => {
	return (
		<section id="tier-breakdown" className="py-12 bg-gray-50">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<div className="flex flex-col items-center space-y-10">
					<div className="space-y-3 text-center">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
							Choose Your Path to Rewards
						</h2>
						<p className="text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-3xl mx-auto">
							Three tiers of rewards, designed to fit your shopping habits
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
						{/* Smooth & Mellow */}
						<div className="bg-white p-6 rounded-xl shadow-sm border flex flex-col">
							<div className="flex items-center justify-between mb-4">
								<h3 className="text-xl font-bold text-gray-900">
									Smooth & Mellow
								</h3>
								<Calendar className="h-8 w-8 text-amber-500" />
							</div>
							<div className="border-t py-4">
								<h4 className="font-semibold mb-2">How to Qualify:</h4>
								<p className="text-gray-700 mb-4">Every 3rd visit</p>
								<h4 className="font-semibold mb-2">Benefit:</h4>
								<div className="bg-amber-100 font-bold py-2 px-4 rounded-lg inline-block mb-4">
									20% OFF (one-time)
								</div>
								<h4 className="font-semibold mb-2">Details:</h4>
								<ul className="space-y-2">
									<li className="flex items-start">
										<Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
										<span className="text-gray-700">
											No spending threshold - just visit and shop!
										</span>
									</li>
									<li className="flex items-start">
										<Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
										<span className="text-gray-700">
											Each 20% off reward lasts for 90 days
										</span>
									</li>
									<li className="flex items-start">
										<Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
										<span className="text-gray-700">
											Use rewards whenever you want within 90 days
										</span>
									</li>
								</ul>
							</div>
						</div>

						{/* Heavy Hitter */}
						<div className="bg-white p-6 rounded-xl shadow-sm border flex flex-col relative overflow-hidden">
							<div className="absolute -right-10 -top-10 bg-amber-500 text-white rotate-45 px-10 py-2 text-sm">
								Popular
							</div>
							<div className="flex items-center justify-between mb-4">
								<h3 className="text-xl font-bold text-gray-900">
									Heavy Hitter
								</h3>
								<Trophy className="h-8 w-8 text-amber-500" />
							</div>
							<div className="border-t py-4">
								<h4 className="font-semibold mb-2">How to Qualify:</h4>
								<p className="text-gray-700 mb-4">
									Earn 4,000 points between March 1, 2025 and March 1, 2026 (1
									point = $1 pre-tax)
								</p>
								<h4 className="font-semibold mb-2">Benefit:</h4>
								<div className="bg-amber-100 font-bold py-2 px-4 rounded-lg inline-block mb-4">
									20% OFF every purchase
								</div>
								<h4 className="font-semibold mb-2">Duration:</h4>
								<p className="text-gray-700 mb-4">Until March 1, 2027</p>
								<p className="text-sm bg-amber-50 p-3 rounded-md border border-amber-100">
									<strong>Tip:</strong> If you're close to 4,000 points, ask a
									team member how much more you need!
								</p>
							</div>
						</div>

						{/* OG */}
						<div className="bg-white p-6 rounded-xl shadow-sm border flex flex-col">
							<div className="flex items-center justify-between mb-4">
								<h3 className="text-xl font-bold text-gray-900">OG</h3>
								<Award className="h-8 w-8 text-amber-500" />
							</div>
							<div className="border-t py-4">
								<h4 className="font-semibold mb-2">How to Qualify:</h4>
								<p className="text-gray-700 mb-4">
									Earn 8,000 points between March 1, 2025 and March 1, 2026
								</p>
								<h4 className="font-semibold mb-2">Benefit:</h4>
								<div className="bg-amber-100 font-bold py-2 px-4 rounded-lg inline-block mb-4">
									30% OFF every purchase
								</div>
								<h4 className="font-semibold mb-2">Duration:</h4>
								<p className="text-gray-700 mb-4">Until March 1, 2027</p>
							</div>
						</div>
					</div>

					{/* <div className="w-full overflow-x-auto">
						<table className="min-w-[600px] w-full border-separate border-spacing-0 rounded-lg overflow-hidden shadow-sm bg-white">
							<caption className="text-lg font-semibold text-gray-700 py-4">
								Comparison of Amplify 2.0 Tiers
							</caption>
							<thead>
								<tr className="bg-purple-50">
									<th className="px-6 py-3 text-left text-gray-900 font-bold text-base">
										Tier
									</th>
									<th className="px-6 py-3 text-left text-gray-900 font-bold text-base">
										How to Qualify
									</th>
									<th className="px-6 py-3 text-left text-gray-900 font-bold text-base">
										Benefit
									</th>
									<th className="px-6 py-3 text-left text-gray-900 font-bold text-base">
										Duration
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className="hover:bg-purple-50 transition">
									<td className="px-6 py-4 font-semibold flex items-center gap-2">
										Smooth & Mellow
									</td>
									<td className="px-6 py-4 text-gray-700">Every 3rd visit</td>
									<td className="px-6 py-4 text-gray-700">
										20% OFF (one-time)
									</td>
									<td className="px-6 py-4 text-gray-700">
										Each reward lasts 90 days
									</td>
								</tr>
								<tr className="bg-gray-50 hover:bg-purple-50 transition">
									<td className="px-6 py-4 font-semibold flex items-center gap-2">
										Heavy Hitter
									</td>
									<td className="px-6 py-4 text-gray-700">
										4,000 points in 12 months
									</td>
									<td className="px-6 py-4 text-gray-700">
										20% OFF every purchase
									</td>
									<td className="px-6 py-4 text-gray-700">
										Until March 1, 2027
									</td>
								</tr>
								<tr className="hover:bg-purple-50 transition">
									<td className="px-6 py-4 font-semibold flex items-center gap-2">
										OG
									</td>
									<td className="px-6 py-4 text-gray-700">
										8,000 points in 12 months
									</td>
									<td className="px-6 py-4 text-gray-700">
										30% OFF every purchase
									</td>
									<td className="px-6 py-4 text-gray-700">
										Until March 1, 2027
									</td>
								</tr>
							</tbody>
						</table>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default TierBreakdown;
