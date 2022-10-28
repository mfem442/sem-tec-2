import { Link } from "react-router-dom";

function App() {
    return (
      <>
      <nav className="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Web App</a>
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
        
      <h1>Bienvenido</h1>
      <Link to = "/users">
      <button type="button" className="btn btn-primary">Go to Users</button>
      </Link>

      <br></br>
      <br></br>
      <Link to = "/login">
      <button type="button" className="btn btn-primary">Go to Login</button>
      </Link>

      <br></br>
      <br></br>
      <Link to = "/profile">
      <button type="button" className="btn btn-primary">Go to Profile</button>
      </Link>
      </>
      
    );
  }
  
  export default App;