import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function LpNavbar() {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 rounded-lg bg-base-100">
				<div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
					<div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
						<Link
							className="px-2 mx-2 font-serif text-3xl "
							to="/"
						>
							EverAfter
						</Link>
						<button
							className="block px-3 py-1 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<img
								src="/src/assets/features/hamburger.svg"
								alt="menu icon"
							/>
						</button>
					</div>
					<div className={"lg:flex flex-grow   mt-10" + (navbarOpen ? " flex" : " hidden")}>
						<ul className="flex flex-col gap-10 list-none lg:flex-row lg:ml-auto">
							<div className="flex flex-col gap-5 lg:flex-row">
								<li className=" nav-item">
									<Link
										className="flex py-2 font-semibold text-white hover:opacity-75"
										to="#feature"
									>
										<span className="ml-2 text-lg">Features</span>
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="flex py-2 font-semibold text-white hover:opacity-75"
										to="#feature"
									>
										<span className="ml-2 text-lg">About</span>
									</Link>
								</li>
							</div>
							<div className="flex flex-col gap-5 mt-2 lg:flex-row lg:mt-0">
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
			</nav>
		</>
	);
}
