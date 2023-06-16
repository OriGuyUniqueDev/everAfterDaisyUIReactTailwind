/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";

interface HeroButtonsProps {}

const HeroButtons: FunctionComponent<HeroButtonsProps> = () => {
	return (
		<div className="flex flex-col gap-5 mt-4 lg:flex lg:flex-row">
			<button className="h-16 font-serif text-xl rounded-md w-52 md:w-96 lg:w-60 md:text-2xl text-base-100 bg-secondary ">Start Planing</button>
			<button className="h-16 font-sans text-xl rounded-md w-52 md:w-96 lg:w-60 md:text-2xl outline outline-primary outline-2">Discover EverAfter</button>
		</div>
	);
};

export default HeroButtons;
