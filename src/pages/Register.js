import React, { useState } from 'react'
import logo from '../assets/images/bootstrap-logo.svg';
import { notifyWarning } from '../common/Common';
import { postPutData } from '../common/APIController';

const Register = () => {

    const [username, setUsername] = useState(null)
    const [email, setEmail] = useState(null)
    const [password1, setPassword1] = useState(null)
    const [password2, setPassword2] = useState(null)

    // console.log(`\nusername : ${username}, email : ${email}, password1 : ${password1}, password2 : ${password2}\n`)

    async function registerUser(userObject) {
        const apiURL = `post/register-user/`;

        let customMsg = {
            "success": "Registeration completed, Proceed to login!",
            "error": "Error on Registeration, try again."
        }

        const result = await postPutData('POST', apiURL, userObject, null, null, customMsg);

        if(!result){
            // notifyError('Incorrect username or password!')
            return
        }

    }

    const handleRegisterSubmit = (event) => {
        event.preventDefault();

        if (password1 !== password2) {
            notifyWarning('Passwords are not matching!')
            return
        }

        registerUser({"username": username, "password": password1, "email": email});

        //if set null, inputs won't clear on UI, thats why setting empty string
        setUsername("");
        setEmail("");
        setPassword1("");
        setPassword2("");
    }

    return (
        <>
            <main class="form-user w-100 m-auto">
                <form onSubmit={(event) => {handleRegisterSubmit(event)}}>
                    <img class="mb-4" src={logo} alt="" width="72" height="57"/>
                    <h1 class="h3 mb-3 fw-normal">Register</h1>

                    <div class="mb-3">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            class="form-control"
                            id="username" required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="name@example.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="password1">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            id="password1"
                            required
                            value={password1}
                            onChange={(e) => setPassword1(e.target.value)}
                        />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="password2">Confirm Password</label>
                        <input
                            type="password"
                            class="form-control"
                            id="password2"
                            required
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                        />
                    </div>

                    <div class="border-top pt-3 mb-3">
                        <small class="text-muted">
                            Already have an account? <a class="ml-2" href="/login">Login Now</a>
                        </small>
                    </div>

                    <button class="btn btn-primary w-100 py-2" type="submit">Register</button>
                </form>
            </main>
        </>
    )
}

export default Register
