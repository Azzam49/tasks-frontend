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
const sessionUserid = 'session-userid';
const sessionUsername = 'session-username';

function UserLoginProvider({children}) {
    const [token, setToken] = useState(window.localStorage.getItem(sessionTokenKey));
    const [userId, setUserId] = useState(window.localStorage.getItem(sessionUserid));
    const [username, setUsername] = useState(window.localStorage.getItem(sessionUsername));
    const provider = {
        token,
        userId,
        username,
        setUserLoginChange: (token, userId, username) => {
            setToken(token);
            setUserId(userId);
            setUsername(username);
            //store in session
            window.localStorage.setItem(sessionTokenKey, token);
            window.localStorage.setItem(sessionUserid, userId);
            window.localStorage.setItem(sessionUsername, username);

            window.location.href = "/ui/dashboard";
        }
    };

    // control display register and login pages
    const currentUrl = window.location.href;
    let loginOrRegisterPage = '';

    if (currentUrl.includes('/ui/register')){
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
