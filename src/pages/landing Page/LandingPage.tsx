/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";

interface LandingPageProps {}

const LandingPage: FunctionComponent<LandingPageProps> = () => {
	return (
		<p>
			Welcome to <span className="font-serif">Ever After</span>
		</p>
	);
};

export default LandingPage;
