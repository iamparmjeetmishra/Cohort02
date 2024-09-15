import Quote from "@/components/Quote";
import AuthForm from "@/components/AuthForm";

export default function Signup() {
	return (
		<main className="flex flex-col xl:flex-row min-h-screen">
			<section className="h-auto w-full flex flex-col items-center justify-center m-auto ">
				<AuthForm type="signup" />
			</section>
			<section className="h-auto w-full flex flex-col items-center justify-center bg-slate-200">
				<Quote />
			</section>
		</main>
	);
}
