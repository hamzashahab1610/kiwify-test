import React from "react";
import { useForm } from "react-hook-form";

const SignupForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm();

	const email = watch("email"); // get value of email field

	const onSubmit = (data) => console.log(data);

	return (
		<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
			>
				<div>
					<label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
						E-mail
					</label>
					<div>
						<input
							type="text"
							autocomplete="off"
							name="null"
							className={`form-input block py-2 px-3 border ${
								errors?.email
									? "border-red-500"
									: "border-gray-300"
							} rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
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
					<label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
						Repetir e-mail
					</label>
					<div>
						<input
							type="email"
							autocomplete="off"
							name="repeatEmail"
							className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
							{...register("repeatEmail", {
								required: "Esse campo é obrigatório",
								validate: (value) =>
									value === email ||
									"Os dois e-mails devem ser iguais."
							})}
						/>
					</div>
					{errors.repeatEmail && (
						<div className="mt-1">
							<div className="text-xs text-red-500">
								{errors.repeatEmail.message}
							</div>
						</div>
					)}
				</div>
				<div className="mt-6">
					<label className="block text-sm font-medium leading-5 text-gray-700">
						Senha
					</label>
					<div>
						<input
							type="password"
							autocomplete="off"
							name="null"
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
				<div className="mt-6">
					<label className="relative flex items-start mt-2">
						<div className="flex items-center h-5">
							<input
								type="checkbox"
								className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer"
								{...register("terms", {
									required: "Esse campo é obrigatório"
								})}
							/>
						</div>

						<div className="ml-2 text-sm leading-5">
							<span className="font-medium text-gray-700">
								Eu li e aceito os
								<a
									href="https://kiwify.com.br/termos-de-uso"
									target="_blank"
									className="underline"
									rel="noopener noreferrer"
								>
									termos de uso
								</a>
								,
								<a
									href="https://kiwify.com.br/licenca-de-uso-software"
									target="_blank"
									className="underline"
									rel="noopener noreferrer"
								>
									termos de licença de uso de software
								</a>
								,
								<a
									href="https://kiwify.com.br/politica-de-conteudo"
									target="_blank"
									className="underline"
									rel="noopener noreferrer"
								>
									política de conteúdo
								</a>
								da Kiwify
							</span>
							{errors.terms && (
								<div className="text-red-500 border-b-0 mt-1">
									(Esse campo é obrigatório)
								</div>
							)}
						</div>
					</label>
				</div>
				<div className="mt-6">
					<span className="block w-full rounded-md shadow-sm">
						<button
							type="submit"
							className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
						>
							Criar conta
						</button>
					</span>
				</div>
			</form>
		</div>
	);
};

export default SignupForm;
