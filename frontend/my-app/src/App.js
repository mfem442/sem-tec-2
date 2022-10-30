import {
	Link,
	useLocation,
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import UserPage from "./pages/UserPage";
import MainPage from "./pages/MainPage";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function TopBar({ userLogged, logout, userData }) {
	let location = useLocation();
	return (
		<header className="p-3 text-bg-dark">
			<div className="container">
				<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
					<a
						href="/"
						className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
					></a>
					{userLogged ? (
						<>
							<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
								<li>
									<a
										href="/"
										className={
											"nav-link px-2 text-secondary" +
											(location.pathname === "/"
												? " text-white"
												: " text-secondary")
										}
									>
										Inicio
									</a>
								</li>
								<li>
									<a
										href="/users"
										className={
											"nav-link px-2 text-secondary" +
											(location.pathname === "/users"
												? " text-white"
												: " text-secondary")
										}
									>
										Usuarios
									</a>
								</li>
								<li>
									<a
										href="/profile"
										className={
											"nav-link px-2 text-secondary" +
											(location.pathname === "/profile"
												? " text-white"
												: " text-secondary")
										}
									>
										Perfil
									</a>
								</li>
							</ul>
						</>
					) : (
						<>
							<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
								<li>
									<a
										href="/"
										className={
											"nav-link px-2 text-secondary" +
											(location.pathname === "/"
												? " text-white"
												: " text-secondary")
										}
									>
										Inicio
									</a>
								</li>
								<li>
									<a
										href="/users"
										className={
											"nav-link px-2 text-secondary" +
											(location.pathname === "/users"
												? " text-white"
												: " text-secondary")
										}
									>
										Usuarios
									</a>
								</li>
							</ul>
						</>
					)}
					{userLogged ? (
						<>
							<div style={{ paddingRight: "1em" }}>
								{" "}
								¡Hola!{" "}
								{userData
									? //userData.name
									  userData.name
									: ""}
							</div>
							<div className="dropdown text-end">
								<a
									href="#"
									className="d-block link-dar text-decoration-none dropdown-toogle"
									data-bs-toggle="dropdown"
								>
									{userData ? (
										<img
											src={userData.avatar_url}
											width="32"
											height="32"
											className="rounded-circle"
										></img>
									) : (
										<img
											src={
												"https://avatars.githubusercontent.com/u/85259595?s=40&v=4"
											}
											alt="mdo"
											width="32"
											height="32"
											className="rounded-circle"
										></img>
									)}
								</a>
								<ul className="dropdown-menu text-snall">
									<li>
										{" "}
										<a className="dropdown-item" href="#">
											{" "}
											New project...
										</a>
									</li>
									<li>
										{" "}
										<a className="dropdown-item" href="#">
											{" "}
											Settings
										</a>
									</li>
									<li>
										{" "}
										<a className="dropdown-item" href="#">
											{" "}
											Perfil
										</a>
									</li>
									<li>
										<hr className="dropdown-divider"></hr>
									</li>
								</ul>
							</div>
							<button
								className="btn btn-outline-light me-2"
								onClick={logout}
							>
								Logout
							</button>
						</>
					) : (
						<div className="text-end">
							<Link to={"/login"}>
								<button
									type="button"
									className="btn btn-outline-light me-2"
								>
									Login
								</button>
							</Link>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}

function App() {
	console.log("TOKEN: " + localStorage.getItem("token"));
	console.log("DATA: " + localStorage.getItem("userData"));
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [userData, setUserData] = useState(
		JSON.parse(localStorage.getItem("userData"))
		//JSON.parse({ myUser })
		//'{"email":"mafer@tec.mx","id":1,"is_active":"true","github_user":"mfem442","items":"[]",}'
	);
	function logout() {
		localStorage.removeItem("token");
		setToken(null);
		localStorage.removeItem("userData");
		setUserData(null);
	}

	return (
		<>
			<BrowserRouter>
				<TopBar
					userLogged={!!token}
					logout={logout}
					userData={userData}
				></TopBar>
				<div className="container py-3">
					<Routes>
						<Route path="/" element={<MainPage />}>
							{" "}
						</Route>
						<Route
							path="/users"
							element={<UserPage token={token} />}
						>
							{" "}
						</Route>
						<Route
							path="/login"
							element={
								<Login
									setToken={setToken}
									setUserData={setUserData}
								/>
							}
						>
							{" "}
						</Route>
						<Route
							path="/profile"
							element={
								<Profile
									name={"mfem442"}
									email={"mafer@tec.mx"}
								/>
							}
						></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
