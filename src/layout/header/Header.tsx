import LpNavbar from "../../pages/landing Page/components/navbar/LpNavbar";
import { FunctionComponent } from "react";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className="px-3 md:px-4 xl:px-16">
      {" "}
      <LpNavbar />
    </header>
  );
};

export default Header;
