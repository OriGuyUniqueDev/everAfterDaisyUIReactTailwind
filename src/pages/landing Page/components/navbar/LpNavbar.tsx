import { FunctionComponent } from "react";
import LeftSideNavbar from "./left side navbar/LeftSideNavbar";
import NavigationDataType from "@/interfaces/navigationDataType";
import LandingPageRoutesName from "@/router/endPointsNames";
import RightSideNavbar from "./right side navbar/RightSideNavbar";

interface LpNavbarProps {}

const leftSideNavLinksData: NavigationDataType[] = [
  {
    name: "EverAfter",
    route: LandingPageRoutesName.ROOT,
    style: "font-serif text-3xl mr-7",
  },
  {
    name: "Features",
    route: "/#features",
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
    <nav className="flex flex-row items-center justify-between ">
      <LeftSideNavbar links={leftSideNavLinksData} />
      <RightSideNavbar />
    </nav>
  );
};

export default LpNavbar;
