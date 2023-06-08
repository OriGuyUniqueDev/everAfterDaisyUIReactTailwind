import React, { FunctionComponent } from "react";

interface MainProps {
	children: React.ReactNode;
}

const Main: FunctionComponent<MainProps> = ({ children }) => {
	return <main className=" min-h-[89vh] px-3 md:px-4 xl:px-16">{children}</main>;
};

export default Main;
