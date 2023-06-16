/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";

interface FeaturesSectionProps {}

const FeaturesSection: FunctionComponent<FeaturesSectionProps> = () => {
	return (
		<div className="col-span-12 py-4 md:py-20 xl:py-8">
			<h2 className="font-serif text-5xl underline md:text-6xl xl:text-7xl ">Features</h2>
		</div>
	);
};

export default FeaturesSection;
