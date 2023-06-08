/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";
import HeroSection from "./components/heroSection/HeroSection";

interface LandingPageProps {}

const LandingPage: FunctionComponent<LandingPageProps> = () => {
	return <HeroSection />;
};

export default LandingPage;
