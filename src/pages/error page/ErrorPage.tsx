/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";

interface ErrorPageProps {}

const ErrorPage: FunctionComponent<ErrorPageProps> = () => {
	return (
		<div
			id="error-page"
			className="h-[89vh] flex flex-col justify-center items-center w-full"
		>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>Error Loading page, Try again later</i>
			</p>
		</div>
	);
};

export default ErrorPage;
