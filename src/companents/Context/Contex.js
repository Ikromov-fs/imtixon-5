import { createContext, useState } from "react";
const Context = createContext();

const ContextProvider = ({ children }) => {
    const [modal, setModal] = useState(true)
    return (
        <Context.Provider value={{ modal, setModal }}>{children}</Context.Provider>
    )
}

export { Context, ContextProvider }

