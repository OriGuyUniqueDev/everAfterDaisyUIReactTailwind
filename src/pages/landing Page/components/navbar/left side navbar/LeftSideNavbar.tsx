import NavigationDataType from "@/interfaces/navigationDataType";
import LandingPageRoutesName from "@/router/endPointsNames";
import { FunctionComponent } from "react";
import { Link, NavLink } from "react-router-dom";

interface LeftSideNavbarProps {
  links: NavigationDataType[];
}

const LeftSideNavbar: FunctionComponent<LeftSideNavbarProps> = ({ links }) => {
  return (
    <div className="">
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
