import React, { FunctionComponent } from "react";

interface MainProps {  
    children: React.ReactNode
}
 
const Main: FunctionComponent<MainProps> = ({children}) => {
    return <main className="bg-rose-700 min-h-[90vh]">{children}</main>;
}
 
export default Main;