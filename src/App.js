import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";

function App() {
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
