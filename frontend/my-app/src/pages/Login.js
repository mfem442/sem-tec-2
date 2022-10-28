import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useRef } from 'react';
import { API_URL } from '../config';

function Login() {
    const email = useRef("")
    const password = useRef("")
    function submitLogin(e){
        e.preventdefault();
        console.log(email.current.value)
        console.log(password.current.value)
        fetch(API_URL+"/token", {
          method: "POST",
          body: new URLSearchParams({
            'username':email.current.value,
            'password': password.current.value,
          }).then((data) => console.log(data))
        })
        alert("Login exitoso")

    }
    return (
      <>
      <h1> Sign in </h1>
      <form onSubmit={submitLogin}>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <div className="form-floating">
      <input ref = {email} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input ref = {password} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me 
      </label>
    </div>
    <Link to = "/">
      <button type="button" className="btn btn-primary">Sign in</button>
      </Link>
  </form>
      
      </>
      
    );
  }

  export default Login;