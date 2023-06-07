import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPageRoutesName from "./endPointsNames";
import ErrorPage from "@/pages/error page/ErrorPage";

interface RouterProps {}

const Router: FunctionComponent<RouterProps> = () => {
  return (
    <Routes>
      <Route
        path={LandingPageRoutesName.ROOT}
        element={
          <h1 className="text-3xl font-bold underline">
            Hello World Main Route
          </h1>
        }
        errorElement={<ErrorPage />}
      ></Route>
      <Route
        path={LandingPageRoutesName.ABOUT}
        element={<h1 className="text-3xl font-bold underline">Abbout Route</h1>}
        errorElement={<ErrorPage />}
      ></Route>
      <Route
        path={LandingPageRoutesName.SIGNUP}
        element={<h1 className="text-3xl font-bold underline">signup Route</h1>}
        errorElement={<ErrorPage />}
      ></Route>
    </Routes>
  );
};

export default Router;
