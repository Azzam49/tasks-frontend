import React, { createContext, useState } from 'react'
import Login from '../pages/Login';

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

    return (
        <UserLoginContext.Provider value={provider}>
            {
                token  ? children : <Login />
            }
        </UserLoginContext.Provider>
    )
}

export default UserLoginProvider
