/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";

interface CtaSectionProps {}

const CtaSection: FunctionComponent<CtaSectionProps> = () => {
	return (
		<div className="flex flex-col items-center justify-center col-span-12 gap-10 my-36 md:my-44">
			<h3 className="mb-2 font-serif text-5xl text-center underline md:text-6xl xl:text-7xl"> Let's Get Started</h3>
			<p className="text-2xl font-thin text-center md:text-3xl">Join the EverAfter community and start planning your dream wedding today.</p>
			<button className="px-32 py-4 text-2xl font-bold rounded-lg bg-secondary text-base-100">Register</button>
		</div>
	);
};

export default CtaSection;
