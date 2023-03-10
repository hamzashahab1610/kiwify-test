import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import { useEffect } from "react";

function App() {
	const navigate = useNavigate();
	useEffect(() => {
		if (window.location.pathname === "/") navigate("/login");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
			;
		</div>
	);
}

export default App;
