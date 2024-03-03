import {createContext, FC, PropsWithChildren, useState} from "react";
import {stateType} from "../types";
import {IMovie} from "../interfaces";

const Context=createContext<{
    setSearchRes:stateType<IMovie[]>;
    searchRes:IMovie[];
    setTrigger:stateType<boolean>;
    trigger:boolean;
    setWith_genres:stateType<string>,
    with_genres:string,
    setTheme:stateType<boolean>,
    theme:boolean
}>(null);
interface IProps extends PropsWithChildren {
}

const ContextProvider: FC<IProps> = ({children}) => {
    const [searchRes,setSearchRes] = useState<IMovie[]>([]);
    const [trigger, setTrigger] = useState<boolean>(false)
    const [with_genres, setWith_genres] = useState<string>(null)
    const [theme, setTheme] = useState<boolean>(true)
    return (
        <Context.Provider value={{searchRes,setSearchRes,trigger,setTrigger,with_genres,setWith_genres,theme,setTheme}}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};