import { Link } from "react-router-dom";

function Profile(){
    const name="Mafer"
    const email="hola@gmail.com"

    return(
        <>
        <nav className="navbar navbar-expand navbar-dark bg-danger justify-content-end" aria-label="Second navbar example">
            <div className="container-fluid ">
            <a className="navbar-brand" href="#">Semana Tec</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample02">
                <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/users">Users</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/profile">Profile</a>
                </li>
                </ul>
                
            </div>
            </div>
        </nav>
        <br></br>

        <div class="card border-white mb-3">
            <div class="card-body">
        <div class="px-4 py-5 my-5 text-center">   
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
        </svg>   
        <h1 class="card-title display-2 fw-bold font-monospace text-danger">¡Hola!</h1>
            <h3 class="card-text display-5 font-monospace text-danger">{name}</h3>
            <div class="col-lg-6 mx-auto">
                
            <p class="card-text lead mb-4 font-monospace text-danger">Email: {email}</p>
            </div>
        </div>
        </div>
        </div>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">                
                <Link to = "/">
                <button type="button" class="btn btn-danger btn-lg px-4 font-monospace">Regresar</button>
                </Link>
            </div>
        </>
    )   
}

export default Profile;