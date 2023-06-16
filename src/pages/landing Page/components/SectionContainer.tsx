import React, { FunctionComponent } from "react";

interface SectionContainerProps {
	children: React.ReactNode;
}

const SectionContainer: FunctionComponent<SectionContainerProps> = ({ children }) => {
	return (
		<div>
			<div className="grid grid-cols-12 gap-5 ">{children}</div>
		</div>
	);
};

export default SectionContainer;
