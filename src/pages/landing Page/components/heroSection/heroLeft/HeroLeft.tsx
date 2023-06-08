/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";

interface HeroLeftProps {}

const HeroLeft: FunctionComponent<HeroLeftProps> = () => {
	return (
		<div className=" h-[92.5vh] w-full flex flex-col justify-center items-center text-center gap-4">
			<h1 className="text-5xl">
				Find your happily ever after with <span className="text-secondary font-bold">EverAfter</span>
			</h1>
			<h2 className="text-md">Looking for a magical and unforgettable wedding? EverAfter has got you covered. Our platform offers everything you need to plan your dream wedding, from venue selection to vendor bookings. Sign up now and start planning your happily ever after.</h2>
			<div className="flex flex-col gap-5 mt-4">
				<button className="font-serif rounded-md text-xl h-16 w-52 text-base-100 bg-secondary ">Start Planing</button>
				<button className="font-sans rounded-md text-xl h-16 w-52 outline outline-primary outline-2">Discover EverAfter</button>
			</div>
		</div>
	);
};

export default HeroLeft;
