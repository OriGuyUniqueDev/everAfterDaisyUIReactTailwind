/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";
import LeftSideNavbar from "./left side navbar/LeftSideNavbar";
import NavigationDataType from "@/interfaces/navigationDataType";
import LandingPageRoutesName from "@/router/endPointsNames";
import RightSideNavbar from "./right side navbar/RightSideNavbar";
import SmallNavBar from "./SmallNavBar";
import { NavLink } from "react-router-dom";

interface LpNavbarProps {}

const leftSideNavLinksData: NavigationDataType[] = [
	// {
	// 	name: "EverAfter",
	// 	route: LandingPageRoutesName.ROOT,
	// 	style: "font-serif text-3xl mr-7",
	// },
	{
		name: "Features",
		route: "/#features",
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
			{/* <nav className=" flex flex-row items-center justify-between ">
				<LeftSideNavbar links={leftSideNavLinksData} />
				<RightSideNavbar />
			</nav> */}
			<div className="drawer">
				<input
					id="navDrawer"
					type="checkbox"
					className="drawer-toggle"
				/>
				<div className="drawer-content flex flex-col">
					{/* Navbar */}
					<div className="w-full navbar bg-base-100">
						<div className="flex-none lg:hidden">
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
						<div className="flex-1 px-2 mx-2 font-serif text-2xl">EverAfter</div>
						<div className="flex-none hidden lg:block">
							<ul className="menu menu-horizontal">
								{/* Navbar menu content here */}
								{leftSideNavLinksData.map((link) => {
									return (
										<li>
											<NavLink
												className={`${link.style} `}
												to={link.route}
												key={`link${link.name}`}
											>
												{link.name}
											</NavLink>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
				<div className="drawer-side">
					<label
						htmlFor="navDrawer"
						className="drawer-overlay"
					></label>
					<ul className="menu py-4 w-60 h-full flex flex-col justify-between gap-5 bg-base-100">
						{/* Sidebar content here */}

						<div className=" font-serif text-2xl">EverAfter</div>

						<div className="flex flex-col gap-5">
							<li>
								<button className=" font-serif rounded-md h-9 w-36 text-base-100 bg-secondary ">Login</button>
							</li>
							<li>
								<button className=" font-sans rounded-md h-9 w-36 outline outline-primary outline-2">Register</button>
							</li>
						</div>
					</ul>
				</div>
			</div>
			{/* <nav className="lg:hidden sm:block flex flex-row items-center justify-between ">
				<LeftSideNavbar links={leftSideNavLinksData} />
				<SmallNavBar />
			</nav> */}
		</>
	);
};

export default LpNavbar;
