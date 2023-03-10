import React from "react";
import SignupForm from "../components/SignupForm";
import Logo from "../assets/images/kiwify-logo.png";

const SignUp = () => {
	return (
		<div>
			<div class="sm:mx-auto sm:w-full sm:max-w-md">
				<img src={Logo} alt="Kiwify" class="mx-auto h-12 w-auto" />
				<h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
					Criar nova conta
				</h2>
				<p class="mt-2 text-center text-base leading-5 text-gray-600">
					Ou{" "}
					<a
						href="/login"
						class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
					>
						entrar na sua conta existente
					</a>
				</p>
			</div>
			<SignupForm />
		</div>
	);
};

export default SignUp;
