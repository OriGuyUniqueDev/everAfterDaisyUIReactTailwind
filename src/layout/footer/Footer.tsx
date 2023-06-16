/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";
import { HashLink as Link } from "react-router-hash-link";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
	return (
		<div className="relative flex flex-row flex-wrap items-center justify-between w-full px-2 py-3 mb-3 rounded-lg ">
			<div className="relative flex items-center justify-between w-full ">
				<Link
					className="px-2 mx-2 font-serif text-xl "
					to="/"
				>
					EverAfter
				</Link>
				<p className="text-xs font-thin text-center">
					Designed and Developed By Ori Guy, Want To Hire Me?{" "}
					<a
						href="/src/assets/OriGuyResume.pdf"
						download={true}
						className=" font-sans2"
					>
						Click Here for CV
					</a>
				</p>
			</div>
		</div>
	);
};

export default Footer;
