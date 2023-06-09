import NavigationDataType from "@/interfaces/navigationDataType";
import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface LeftSideNavbarProps {
	links: NavigationDataType[];
}

const LeftSideNavbar: FunctionComponent<LeftSideNavbarProps> = ({ links }) => {
	return (
		<div className="flex items-center gap-5">
			{links.map((link) => {
				return (
					<NavLink
						className={`${link.style} `}
						to={link.route}
						key={`link${link.name}`}
					>
						{link.name}
					</NavLink>
				);
			})}
		</div>
	);
};

export default LeftSideNavbar;
