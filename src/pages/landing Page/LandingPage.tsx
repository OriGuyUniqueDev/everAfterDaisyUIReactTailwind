/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";
import LoginPage from "../loginPage/LoginPage";
import CtaSection from "./components/CtaSection/CtaSection";
import FeaturesSection from "./components/featuresSection/FeaturesSection";
import HeroSection from "./components/heroSection/HeroSection";
import SectionContainer from "./components/SectionContainer";

interface LandingPageProps {}

const LandingPage: FunctionComponent<LandingPageProps> = () => {
	return (
		<SectionContainer>
			<HeroSection />
			<FeaturesSection />
			<CtaSection />
			<LoginPage />
		</SectionContainer>
	);
};

export default LandingPage;
