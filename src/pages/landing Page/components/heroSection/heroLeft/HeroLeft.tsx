/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";
import HeroButtons from "./components/HeroButtons";
import HeroImage from "./components/HeroImage";
import HeroTitles from "./components/HeroTitles";
import HeroTitlesButtonsContainer from "./components/HeroTitlesButtonsContainer";

interface HeroLeftProps {}

const HeroLeft: FunctionComponent<HeroLeftProps> = () => {
	return (
		<>
			<HeroTitlesButtonsContainer>
				<HeroTitles />
				<HeroButtons />
			</HeroTitlesButtonsContainer>
			<div className="hidden lg:col-span-1 lg:block"></div>
			<HeroImage />
		</>
	);
};

export default HeroLeft;
