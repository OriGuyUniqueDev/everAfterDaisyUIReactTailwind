/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

interface LoginPageProps {}

const LoginPage: FunctionComponent<LoginPageProps> = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			console.log(formik.errors);

			console.log(JSON.stringify(values, null, 2));
		},
		validationSchema: yup.object({
			email: yup.string().required().email("invalid Email"),
			password: yup.string().min(8, "Too Short, Must be at least 8 chars").required(),
		}),
	});
	return (
		<dialog
			id="loginModal"
			className="modal modal-bottom"
		>
			<form
				method="dialog"
				className="text-white modal-box"
				onSubmit={(e) => {
					e.preventDefault();
					formik.handleSubmit();
					setTimeout(() => {
						window.loginModal.close();
					}, 2000);
				}}
			>
				<h3 className="text-lg font-bold">Hello! Let's Login 😊</h3>
				<div className="flex flex-col max-w-xs gap-2 mt-8">
					<div className="w-full max-w-xs form-control">
						<label
							htmlFor="email"
							className="label"
						>
							<span className="label-text">Email</span>
						</label>
						<input
							type="email"
							id="email"
							name="email"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
							placeholder="enter email"
							className="w-full max-w-xs input input-bordered"
						/>
						{formik.touched.email && Boolean(formik.errors.email) ? <p className="text-error">{formik.errors.email}</p> : null}
					</div>
					<div className="w-full max-w-xs form-control">
						<label
							htmlFor="password"
							className="label"
						>
							<span className="label-text">Password</span>
						</label>
						<input
							type="password"
							id="password"
							name="password"
							onChange={formik.handleChange}
							value={formik.values.password}
							onBlur={formik.handleBlur}
							placeholder="enter password"
							className="w-full max-w-xs input input-bordered"
						/>
						{formik.touched.password && Boolean(formik.errors.password) ? <p className="text-error">{formik.errors.password}</p> : null}
					</div>

					<button
						type="submit"
						className="w-32 mt-10 text-black btn btn-md bg-secondary"
						disabled={(formik.dirty && !formik.isValid) || !formik.isValid || formik.values.email === "" || formik.values.password === ""}
					>
						Submit
					</button>
				</div>
				<div className="modal-action">
					{/* if there is a button in form, it will close the modal */}
					<div
						className="btn"
						onClick={() => window.loginModal.close()}
					>
						Close
					</div>
				</div>
			</form>
		</dialog>
	);
};

export default LoginPage;
