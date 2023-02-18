import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
    user: {
        token: ''
    },
    setUser: () => { }
});

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(window.localStorage.getItem('token')))

    // useEffect(() => {
    //     const token = JSON.parse(window.localStorage.getItem('token'))

    //     if (token === null || token === undefined) return

    //     setUser(token);
    // }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default AuthContext;
