import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const onSubmit = (data) => console.log(data);

	return (
		<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
			>
				<div>
					<label
						for="email"
						className="block text-sm font-medium leading-5 mb-1 text-gray-700"
					>
						E-mail
					</label>
					<div>
						<input
							type="text"
							autocomplete="username"
							name="email"
							className={`form-input block py-2 px-3 border ${
								errors?.email
									? "border-red-500"
									: "border-gray-300"
							}  rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
							{...register("email", {
								required: "Esse campo é obrigatório",
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: "O e-mail deve ser válido"
								}
							})}
						/>
					</div>
					{errors.email && (
						<div className="mt-1">
							<div className="text-xs text-red-500">
								{errors.email.message}
							</div>
						</div>
					)}
				</div>
				<div className="mt-6">
					<label
						for="password"
						className="block text-sm font-medium leading-5 text-gray-700"
					>
						Senha
					</label>
					<div>
						<input
							type="password"
							autocomplete="current-password"
							name="password"
							className={`form-input block py-2 px-3 border ${
								errors?.email
									? "border-red-500"
									: "border-gray-300"
							} rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
							{...register("password", {
								required: "Esse campo é obrigatório"
							})}
						/>
					</div>
					{errors.password && (
						<div className="mt-1">
							<div className="text-xs text-red-500">
								{errors.password.message}
							</div>
						</div>
					)}
				</div>
				<div className="mt-2 flex items-center justify-end">
					<div className="text-sm leading-5">
						<a
							href="/ResetPassword"
							className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
						>
							Esqueceu a senha?
						</a>
					</div>
				</div>
				<div className="mt-6">
					<span className="block w-full rounded-md shadow-sm">
						<button
							type="submit"
							className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
						>
							Entrar
						</button>
					</span>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
