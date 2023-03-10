import React from "react";
import LoginForm from "../components/LoginForm";
import Logo from "../assets/images/kiwify-logo.png";

const Login = () => {
	return (
		<div>
			<div class="sm:mx-auto sm:w-full sm:max-w-md">
				<img src={Logo} alt="Workflow" class="mx-auto h-12 w-auto" />
				<h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
					Entrar na sua conta
				</h2>
				<p class="mt-2 text-center text-base leading-5 text-gray-600">
					Ou{" "}
					<a
						href="/signup"
						class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
					>
						fazer cadastro
					</a>
				</p>
			</div>
			<LoginForm />
		</div>
	);
};

export default Login;
