import { FunctionComponent } from "react";

interface FeatureCardProps {
	icon: string;
	title: string;
	featureInfo: string;
}

const FeatureCard: FunctionComponent<FeatureCardProps> = ({ featureInfo, icon, title }) => {
	return (
		<div className="flex flex-col items-center justify-center col-span-12 gap-3 mt-10 text-center md:col-span-6 xl:col-span-4 md:my-0">
			<img
				src={icon}
				alt="icon"
			/>

			<h6 className="text-3xl underline text-secondary font-sans2">{title}</h6>
			<p className="text-xl font-normal">{featureInfo}</p>
		</div>
	);
};

export default FeatureCard;
