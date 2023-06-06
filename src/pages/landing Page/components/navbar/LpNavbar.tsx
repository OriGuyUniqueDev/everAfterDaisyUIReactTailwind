import { FunctionComponent } from "react";
import LeftSideNavbar from "./left side navbar/LeftSideNavbar";

interface LpNavbarProps {}

const leftSideNavLinksData = {
  logo: "EverAfter",
  features: "Features",
  about: "About",
};

const LpNavbar: FunctionComponent<LpNavbarProps> = () => {
  return (
    <nav className="min-h-[5vh]">
      <LeftSideNavbar />
    </nav>
  );
};

export default LpNavbar;
