import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { SignupInputs } from "@iamparmjeet/medium-common";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "@/Constants";
import { toast } from "sonner";

export default function AuthForm({
	type,
}: {
	type: "signup" | "signin";
}) {
	const [formInputs, setFormInputs] = useState<SignupInputs>({
		name: "",
		email: "",
		password: "",
	});

	console.log(formInputs)

	const navigate = useNavigate()

	async function sendRequest() {
		try {
			const res = await axios.post(
				`${BACKEND_URL}/api/v1/user/${type === 'signup' ? 'signup' : 'signin'}`,
				formInputs
			);
			console.log(res);
			console.log('from form')
			const jwt = res.data.jwt;
			toast.success("jwt", jwt);
			localStorage.setItem("token", jwt);
			navigate('/blogs')
		} catch (error) {
			if (error instanceof Error) {
				toast.error(`Err Signup', ${error.message}`);
			} else {
				console.log(error);
			}
		}
	}

	return (
		<>
			<form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3 min-w-full p-4 md:min-w-[400px]">
				{type === "signup" ? (
					<h1 className="text-4xl font-bold">Create an account</h1>
				) : (
					<h1 className="text-4xl font-bold">Login</h1>
				)}
				<p className="mb-4">
					{type === "signup"
						? "Already have an account? "
						: "Don't have an account?"}
					<Link
						className="underline"
						to={type === "signup" ? "/signin" : "/signup"}
					>
						{type === "signup" ? "Login" : "Signup"}
					</Link>
				</p>
				{type === "signup" ? (
					<>
						<Label htmlFor="name" className="text-md font-medium">
							name
						</Label>
						<Input
							onChange={(e) => {
								setFormInputs({
									...formInputs,
									name: e.target.value,
								});
							}}
							name="name"
							id="name"
							placeholder="Enter your name"
						/>
					</>
				) : null}
				<Label htmlFor="email" className="text-md font-medium">
					Email
				</Label>
				<Input
					onChange={(e) => {
						setFormInputs({
							...formInputs,
							email: e.target.value,
						});
					}}
					type="email"
					name="username"
					id="username"
					placeholder="m@example.com"
				/>
				<Label htmlFor="password" className="text-md font-medium">
					Password
				</Label>
				<Input
					onChange={(e) => {
						setFormInputs({
							...formInputs,
							password: e.target.value,
						});
					}}
					type="password"
					name="password"
					id="password"
					placeholder="Enter your password"
				/>
				<Button onClick={sendRequest}>
					{type === "signup" ? "Sign Up" : "Sign In"}
				</Button>
			</form>
		</>
	);
}
