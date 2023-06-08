/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";
import HeroLeft from "./heroLeft/HeroLeft";

interface HeroSectionProps {}

const HeroSection: FunctionComponent<HeroSectionProps> = () => {
	return (
		<div>
			<HeroLeft />
		</div>
	);
};

export default HeroSection;
