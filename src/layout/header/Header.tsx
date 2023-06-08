/* eslint-disable @typescript-eslint/no-empty-interface */
import LpNavbar from "../../pages/landing Page/components/navbar/LpNavbar";
import { FunctionComponent } from "react";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
	return (
		<header className="min-h-[7.5vh] px-3 md:px-4 xl:px-16 grid items-center drop-shadow-xl shadow-info">
			{" "}
			<LpNavbar />
		</header>
	);
};

export default Header;
