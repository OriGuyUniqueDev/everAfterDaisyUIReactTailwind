import React, { FunctionComponent } from "react";

interface HeroTitlesButtonsContainerProps {
	children: React.ReactNode;
}

const HeroTitlesButtonsContainer: FunctionComponent<HeroTitlesButtonsContainerProps> = ({ children }) => {
	return <div className=" h-[92.5vh] w-full flex flex-col justify-center items-center text-center lg:text-left lg:items-start col-span-12 gap-10  lg:gap-16 lg:col-span-6 ">{children}</div>;
};

export default HeroTitlesButtonsContainer;
