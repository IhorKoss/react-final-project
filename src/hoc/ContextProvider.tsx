import {createContext, FC, PropsWithChildren, useState} from "react";
import {stateType} from "../types";
import {IMovie} from "../interfaces";

const Context=createContext<{
    setTheme:stateType<boolean>,
    theme:boolean
}>(null);
interface IProps extends PropsWithChildren {
}

const ContextProvider: FC<IProps> = ({children}) => {
    const [theme, setTheme] = useState<boolean>(true)
    return (
        <Context.Provider value={{theme,setTheme}}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};