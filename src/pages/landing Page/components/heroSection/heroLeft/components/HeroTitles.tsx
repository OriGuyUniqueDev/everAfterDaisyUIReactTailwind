/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";

interface HeroTitlesProps {}

const HeroTitles: FunctionComponent<HeroTitlesProps> = () => {
	return (
		<div className="flex flex-col gap-5 ">
			<h1 className="text-5xl md:text-[5rem] lg:text-7xl">
				Find your happily ever after with <span className="font-bold text-secondary">EverAfter</span>
			</h1>
			<h2 className="text-md md:text-2xl lg:text-xl">Looking for a magical and unforgettable wedding? EverAfter has got you covered. Our platform offers everything you need to plan your dream wedding, from venue selection to vendor bookings. Sign up now and start planning your happily ever after.</h2>
		</div>
	);
};

export default HeroTitles;
