import React, { FunctionComponent } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
	return (
		<div className="container mx-auto text-white">
			<Header />
			<Main>{children}</Main>
			<Footer />
		</div>
	);
};

export default Layout;
