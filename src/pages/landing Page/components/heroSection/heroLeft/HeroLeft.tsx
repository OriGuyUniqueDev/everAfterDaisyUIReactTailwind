/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";

interface HeroLeftProps {}

const HeroLeft: FunctionComponent<HeroLeftProps> = () => {
	return (
		<>
			<div className=" h-[92.5vh] w-full flex flex-col justify-center items-center text-center lg:text-left lg:items-start col-span-12   gap-16 lg:col-span-6 ">
				<div className="flex flex-col gap-5">
					<h1 className="text-5xl lg:text-7xl">
						Find your happily ever after with <span className="text-secondary font-bold">EverAfter</span>
					</h1>
					<h2 className="text-md lg:text-xl">Looking for a magical and unforgettable wedding? EverAfter has got you covered. Our platform offers everything you need to plan your dream wedding, from venue selection to vendor bookings. Sign up now and start planning your happily ever after.</h2>
				</div>
				<div className="flex flex-col gap-5 mt-4 lg:flex lg:flex-row">
					<button className="font-serif rounded-md text-xl h-16 w-52 text-base-100 bg-secondary ">Start Planing</button>
					<button className="font-sans rounded-md text-xl h-16 w-52 outline outline-primary outline-2">Discover EverAfter</button>
				</div>
			</div>
			<div className="lg:col-span-1 hidden lg:block"></div>
			<div className="lg:col-span-5 justify-self-center hidden lg:block self-center ">
				<img
					src="/src/assets/hero.png"
					alt="hero photo"
				/>
			</div>
		</>
	);
};

export default HeroLeft;
