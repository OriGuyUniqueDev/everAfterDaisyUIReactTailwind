/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";
import NavigationDataType from "@/interfaces/navigationDataType";
import LandingPageRoutesName from "@/router/endPointsNames";
import { Link, NavLink } from "react-router-dom";

interface LpNavbarProps {}

const leftSideNavLinksData: NavigationDataType[] = [
	{
		name: "Features",
		route: "/features",
		style: "font-sans",
	},
	{
		name: "About",
		route: LandingPageRoutesName.ABOUT,
		style: "font-sans",
	},
];

const LpNavbar: FunctionComponent<LpNavbarProps> = () => {
	return (
		<>
			<div className=" drawer">
				<input
					id="navDrawer"
					type="checkbox"
					className="drawer-toggle"
				/>
				<div className="flex flex-col drawer-content">
					<div className="w-full navbar bg-base-100 rounded-2xl">
						<Link
							to={"/"}
							className="flex-1 px-2 mx-2 font-serif text-2xl "
						>
							EverAfter
						</Link>
						<div className="flex-none hidden md:block">
							<ul className="flex flex-row gap-5 menu menu-horizontal">
								{/* Navbar menu content here */}
								{leftSideNavLinksData.map((link) => {
									return (
										<li>
											<NavLink
												className={`${link.style} text-lg`}
												to={link.route}
												key={`link${link.name}`}
											>
												{link.name}
											</NavLink>
										</li>
									);
								})}
								<div className="flex flex-row items-center justify-center gap-2">
									<button className="font-serif text-center rounded-md h-9 w-36 text-base-100 bg-secondary">Login</button>

									<button className="font-sans text-center rounded-md h-9 w-36 outline outline-primary outline-2">Register</button>
								</div>
							</ul>
						</div>
						<div className="flex-none md:hidden">
							<label
								htmlFor="navDrawer"
								className="btn btn-square btn-ghost"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="inline-block w-6 h-6 stroke-current"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									></path>
								</svg>
							</label>
						</div>
					</div>
				</div>
				<div className="drawer-side">
					<label
						htmlFor="navDrawer"
						className="drawer-overlay"
					></label>
					<ul className="flex flex-col justify-between h-full gap-5 py-4 menu w-60 bg-base-100">
						<div className="font-serif text-2xl ">EverAfter</div>

						<div className="flex flex-col gap-5">
							<li>
								<button className="font-serif rounded-md h-9 w-36 text-base-100 bg-secondary">Login</button>
							</li>
							<li>
								<button className="font-sans rounded-md h-9 w-36 outline outline-primary outline-2">Register</button>
							</li>
						</div>
					</ul>
				</div>
			</div>
		</>
	);
};

export default LpNavbar;
