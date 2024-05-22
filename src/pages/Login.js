import React, { useState, useContext } from 'react'
import logo from '../assets/images/bootstrap-logo.svg';
import { postPutData } from '../common/APIController';
import { UserLoginContext } from '../context/UserLoginProvider';

const Login = () => {

    const { setUserLoginChange } = useContext(UserLoginContext);

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    async function fetchandSetToken(userObject) {

        const apiURL = `token/`;

        const result = await postPutData('POST', apiURL, userObject);
        const token = result.access;
        // alert(`token : ${result.access}`)

        setUserLoginChange(token);
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        fetchandSetToken({"username": username, "password": password});
    }

    return (
    <>
        <main className="form-user w-100 m-auto">
            <form onSubmit={(event) => {handleLoginSubmit(event)}}>
            <img className="mb-4" src={logo} alt="" width="72" height="57"/>
            <h1 className="h3 mb-3 fw-normal">Please login</h1>

            <div className="form-floating">
                <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating">
                <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
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
