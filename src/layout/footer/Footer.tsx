import { FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <h2 className="bg-primary h-[7.5vh] px-3 md:px-4 xl:px-16">Footer text</h2>
  );
};

export default Footer;
