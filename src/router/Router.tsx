/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPageRoutesName from "./endPointsNames";
import ErrorPage from "@/pages/error page/ErrorPage";
import LandingPage from "@/pages/landing Page/LandingPage";

interface RouterProps {}

const Router: FunctionComponent<RouterProps> = () => {
	return (
		<Routes>
			<Route
				path={LandingPageRoutesName.ROOT}
				element={<LandingPage />}
				// errorElement={<ErrorPage />}
			/>
			<Route
				path={LandingPageRoutesName.ABOUT}
				element={<h1 className="text-3xl font-bold underline">Abbout Route</h1>}
				// errorElement={<ErrorPage />}
			/>
			<Route
				path={LandingPageRoutesName.SIGNUP}
				element={<h1 className="text-3xl font-bold underline">signup Route</h1>}
				// errorElement={<ErrorPage />}
			/>
			<Route
				path="*"
				element={<ErrorPage />}
			/>
		</Routes>
	);
};

export default Router;
