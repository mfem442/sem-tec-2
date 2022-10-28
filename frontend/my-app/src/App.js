import { Link, useLocation } from "react-router-dom";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Profile from './pages/Profile';
import UserPage from './pages/UserPage';
import MainPage from './pages/MainPage';

function Topbar(){
  let location = useLocation
  return(
    <>
    <header>
      <nav className="navbar navbar-expand navbar-dark bg-dark sticky-top" aria-label="Second navbar example">
        <div className="container-fluid">
          <a  className="nav-link" >
            <Link to='/'>Semana Tec</Link>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a  className="nav-link" >
                  <Link to='/login'>Login</Link>
                </a>
              </li>
              <li className="nav-item">
                <a  className="nav-link" >
                  <Link to='/users'>Usuarios</Link>
                </a>
              </li>
                <li className="nav-item">
                  <a  className="nav-link" >
                    <Link to='/profile'>Perfil</Link>
                  </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </>
  );  
}

function App() {
    return (
      <>
      <BrowserRouter>
      <Topbar></Topbar>
        <Routes>
          <Route path="/" element={<MainPage />}> </Route>
          <Route path="/users" element={<UserPage />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/profile" element={<Profile />}></Route>

        </Routes>
      </BrowserRouter>
      </>
      
    );
  }
  
  export default App;