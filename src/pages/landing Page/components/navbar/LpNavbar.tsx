import { FunctionComponent } from "react";
import LeftSideNavbar from "./left side navbar/LeftSideNavbar";
import NavigationDataType from "@/interfaces/navigationDataType";
import LandingPageRoutesName from "@/router/endPointsNames";

interface LpNavbarProps {}

const leftSideNavLinksData: NavigationDataType[] = [
  {
    name: "EverAfter",
    route: LandingPageRoutesName.ROOT,
    style: "font-serif",
  },
  {
    name: "Features",
    route: "#features",
    style: "font-sans",
  },
  {
    name: "About",
    route: LandingPageRoutesName.ABOUT,
    style: "font-sans",
  },
];

const LpNavbar: FunctionComponent<LpNavbarProps> = () => {
  return (
    <nav className="min-h-[5vh]">
      <LeftSideNavbar links={leftSideNavLinksData} />
    </nav>
  );
};

export default LpNavbar;
