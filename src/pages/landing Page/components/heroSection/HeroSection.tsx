/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";
import HeroLeft from "./heroLeft/HeroLeft";

interface HeroSectionProps {}

const HeroSection: FunctionComponent<HeroSectionProps> = () => {
	return (
		<div className="   grid grid-cols-12 gap-5	">
			<HeroLeft />
		</div>
	);
};

export default HeroSection;
