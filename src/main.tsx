import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routerEndPoints from "./router/routerEndPoints";
import Layout from "./layout/Layout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Layout>
			<RouterProvider router={routerEndPoints}></RouterProvider>
		</Layout>
	</React.StrictMode>
);
