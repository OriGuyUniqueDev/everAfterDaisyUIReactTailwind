import { createBrowserRouter } from "react-router-dom";
import LandingPageRoutesName from "./endPointsNames";

const landingPageRouterEndPoints = createBrowserRouter([
  {
    path: LandingPageRoutesName.ROOT,
    element: (
      <h1 className="text-3xl font-bold   underline">Hello World Main Route</h1>
    ),
  },
  {
    path: LandingPageRoutesName.ABOUT,
    element: <h1 className="text-3xl font-bold   underline">About page</h1>,
  },
  {
    path: LandingPageRoutesName.SIGNUP,
    element: <h1 className="text-3xl font-bold   underline">Signup page</h1>,
  },
]);

export default landingPageRouterEndPoints;
