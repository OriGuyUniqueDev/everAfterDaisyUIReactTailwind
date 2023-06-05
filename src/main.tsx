import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routerEndPoints from "./router/routerEndPoints";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={routerEndPoints}></RouterProvider>
	</React.StrictMode>
);
