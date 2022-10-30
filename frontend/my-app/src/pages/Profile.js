import { Link } from "react-router-dom";

function Profile({ name, email }) {
	return (
		<>
			<div className="card border-white mb-3">
				<div className="card-body">
					<div className="px-4 py-5 my-5 text-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="50"
							height="50"
							fill=""
							className="bi bi-emoji-smile-fill"
							viewBox="0 0 16 16"
						>
							<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
						</svg>
						<h1 className="card-title display-2 fw-bold font-monospace text-danger">
							¡Hola!
						</h1>
						<h3 className="card-text display-5 font-monospace text-danger">
							{name}
						</h3>
						<div className="col-lg-6 mx-auto">
							<p className="card-text lead mb-4 font-monospace text-danger">
								Email: {email}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Profile;
