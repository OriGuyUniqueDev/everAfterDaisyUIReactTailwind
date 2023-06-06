import LandingPageRoutesName from "@/router/endPointsNames";
import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface LeftSideNavbarProps {}

const LeftSideNavbar: FunctionComponent<LeftSideNavbarProps> = () => {
  return (
    <>
      <NavLink
        to={LandingPageRoutesName.ROOT}
        className={`font-serif`}
      ></NavLink>
    </>
  );
};

export default LeftSideNavbar;
