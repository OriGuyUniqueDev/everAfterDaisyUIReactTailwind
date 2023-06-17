/* eslint-disable @typescript-eslint/no-empty-interface */
import featureCardType from "@/interfaces/featureCardType";
import { FunctionComponent } from "react";
import FeatureCard from "./components/FeatureCard";

interface FeaturesSectionProps {}

const data: featureCardType[] = [
	{
		icon: "/src/assets/features/shekel.svg",
		title: "Budget Planning",
		featureData: "Keep track of your wedding expenses and ensure you're staying within your budget with our easy-to-use budget planning tool",
	},
	{
		icon: "/src/assets/features/vManagment.svg",
		title: "Vendor Management",
		featureData: "Manage your vendors in one place by keeping track of who you've booked, who you still need to book, and all important vendor details.",
	},
	{
		icon: "/src/assets/features/guestList.svg",
		title: "Guest List Management",
		featureData: " Keep track of your guest list and easily manage RSVPs with our guest list management tool.",
	},
	{
		icon: "/src/assets/features/timeLine.svg",
		title: "Timeline Planning",
		featureData: "Never miss a deadline with our timeline planning tool, which helps you stay on track with all of your wedding planning tasks.",
	},
	{
		icon: "/src/assets/features/events.svg",
		title: "Multiple Events",
		featureData: "Our business account allows you to manage multiple events, perfect for wedding planners or those planning multiple events at once.",
	},
	{
		icon: "/src/assets/features/mobileAccess.svg",
		title: "Mobile Access",
		featureData: " Access your wedding planning tools on-the-go with our web based app, available for all browsers.",
	},
];

const FeaturesSection: FunctionComponent<FeaturesSectionProps> = () => {
	return (
		<div className="col-span-12 ">
			<h2
				id="feature"
				className="mb-2 font-serif text-5xl text-center underline pb-9 md:text-6xl xl:text-7xl md:pb-12 xl:mb-10 "
			>
				Features
			</h2>
			<div className="grid grid-cols-12 gap-6 md:gap-12 xl:gap-24 ">
				{data.map((card) => (
					<FeatureCard
						icon={card.icon}
						title={card.title}
						featureInfo={card.featureData}
						key={card.title}
					/>
				))}
			</div>
		</div>
	);
};

export default FeaturesSection;
