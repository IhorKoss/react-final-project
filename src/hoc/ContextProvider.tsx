import {createContext, FC, PropsWithChildren, useState} from "react";
import {stateType} from "../types";
import {IMovie} from "../interfaces";

const Context=createContext<{
    setSearchRes:stateType<IMovie[]>;
    searchRes:IMovie[]
}>(null);
interface IProps extends PropsWithChildren {
}

const ContextProvider: FC<IProps> = ({children}) => {
    const [searchRes,setSearchRes] = useState<IMovie[]>([]);
    return (
        <Context.Provider value={{searchRes,setSearchRes}}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};