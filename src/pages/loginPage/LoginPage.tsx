/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";

interface LoginPageProps {}

const LoginPage: FunctionComponent<LoginPageProps> = () => {
	return (
		<dialog
			id="loginModal"
			className="modal modal-bottom sm:modal-middle"
		></dialog>
	);
};

export default LoginPage;
