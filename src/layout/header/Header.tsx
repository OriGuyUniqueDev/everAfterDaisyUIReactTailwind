import { FunctionComponent } from "react";

interface HeaderProps {
    
}
 
const Header: FunctionComponent<HeaderProps> = () => {
    return <h1 className="bg-primary h-[5vh]" >Header Text</h1>;
}
 
export default Header;