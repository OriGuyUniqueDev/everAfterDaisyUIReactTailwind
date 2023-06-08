import React, { FunctionComponent } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	);
};

export default Layout;
