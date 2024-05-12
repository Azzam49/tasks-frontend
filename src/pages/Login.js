import React from 'react'
import logo from '../assets/images/bootstrap-logo.svg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        navigate("/");
    }

    return (
    <>
        <main className="form-user w-100 m-auto">
            <form onSubmit={(event) => {handleLoginSubmit(event)}}>
            <img className="mb-4" src={logo} alt="" width="72" height="57"/>
            <h1 className="h3 mb-3 fw-normal">Please login</h1>

            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
            </div>

            <div className="border-top pt-3 mb-3">
                <small className="text-muted">
                    Need An Account? <a className="ml-2" href="register.html">Register Now</a>
                </small>
            </div>

            <button className="btn btn-primary w-100 py-2" type="submit">Login</button>
            </form>
      </main>
    </>
    )
}

export default Login
