import { FunctionComponent } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

interface LayoutProps {
    
}
 
const Layout: FunctionComponent<LayoutProps> = () => {
    return ( <>
    <Header />
    <Main />
    <Footer />
    </> );
}
 
export default Layout;