import { useState, useRef, useEffect } from "react";
import { API_URL } from "../config";

function User({ user, editable, deleteUser }) {
	const [active, setActive] = useState(user.is_active);
	function clickEvent(e) {
		setActive(!active);
	}

	function clickDelete() {
		deleteUser(user.id);
	}

	return (
		<a
			href="#"
			className={
				"list-group-item list-group-item-action" +
				(active ? " active" : "")
			}
			aria-current="true"
		>
			<div className="d-flex w-100 justify-content-between">
				<h5 className="mb-1">{user.github_user}</h5>
				<small>{active ? "Active" : "Inactive"}</small>
			</div>
			<p className="mb-1">{user.email}</p>
			{editable ? (
				<>
					<button
						onClick={clickEvent}
						type="button"
						className={
							active
								? "btn btn-primary"
								: "btn btn-outline-primary"
						}
					>
						{active ? "Deactivate" : "Activate"}
					</button>
					<button
						onClick={clickDelete}
						type="button"
						className="btn btn-danger"
					>
						Delete
					</button>
				</>
			) : (
				<></>
			)}
		</a>
	);
}

function UserList({ users, editable, deleteUser }) {
	return (
		<div className="list-group">
			{users.map((user) => (
				<User
					user={user}
					editable={editable}
					deleteUser={deleteUser}
					key={user.email}
				></User>
			))}
		</div>
	);
}

function UserForm({ createUser }) {
	let email = useRef("");
	let password = useRef("");
	let githubUser = useRef("");

	function clickCreate(e) {
		e.preventDefault();
		let data = {
			email: email.current.value,
			password: password.current.value,
			github_user: githubUser.current.value,
		};
		createUser(data);
		email.current.value = "";
		password.current.value = "";
		githubUser.current.value = "";
	}

	return (
		<form onSubmit={clickCreate}>
			<div className="mb-3">
				<label htmlFor="exampleInputEmail" className="form-label">
					Email address
				</label>
				<input
					ref={email}
					type="email"
					className="form-control"
					id="exampleInputEmail"
					aria-describedby="emailHelp"
				></input>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleInputPassword1" className="form-label">
					Password
				</label>
				<input
					ref={password}
					type="password"
					className="form-control"
					id="exampleInputPassword1"
				></input>
			</div>
			<div className="mb-3">
				<label htmlFor="github-user" className="form-label">
					Github User
				</label>
				<input
					ref={githubUser}
					type="text"
					className="form-control"
					id="github-user"
				></input>
			</div>
			<button type="submit" className="btn btn-primary">
				Create
			</button>
		</form>
	);
}

function UserPage({ token }) {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		let successful = false;
		fetch(API_URL + "/users/").then((data) => {
			if (data.status === 200) {
				successful = true;
			}
		});
	});
	return (
		<>
			<h1>User List</h1>
			<UserList users={userList}></UserList>
		</>
	);
}

export default UserPage;
