import { FunctionComponent } from "react";

interface RightSideNavbarProps {}

const RightSideNavbar: FunctionComponent<RightSideNavbarProps> = () => {
  return (
    <div className="flex flex-row gap-5">
      <button className="font-serif rounded-md h-9 w-36 text-base-100 bg-secondary ">
        Login
      </button>
      <button className="font-sans rounded-md h-9 w-36 outline outline-primary outline-2">
        Register
      </button>
    </div>
  );
};

export default RightSideNavbar;
