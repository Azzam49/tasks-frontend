import React, { createContext, useState } from 'react'
import Login from '../pages/Login';
import Register from '../pages/Register';

export const UserLoginContext = createContext({
    token: "",
    setUserLoginChange: () => {
        return 0;
    }
});

const sessionTokenKey = 'session-token';

function UserLoginProvider({children}) {
    const [token, setToken] = useState(window.localStorage.getItem(sessionTokenKey));
    const provider = {
        token,
        setUserLoginChange: (token) => {
            setToken(token);
            //store in session
            window.localStorage.setItem(sessionTokenKey, token);
        }
    };

    // control display register and login pages
    const currentUrl = window.location.href;
    let loginOrRegisterPage = '';

    if (currentUrl.includes('/register')){
        loginOrRegisterPage = <Register />;
    } else {
        loginOrRegisterPage = <Login />;
    }

    return (
        <UserLoginContext.Provider value={provider}>
            {
                // token  ? children : <Login />
                token  ? children : loginOrRegisterPage
            }
        </UserLoginContext.Provider>
    )
}

export default UserLoginProvider
