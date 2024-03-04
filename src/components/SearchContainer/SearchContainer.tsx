import {FC, PropsWithChildren, useEffect, useState} from "react";

import css from './Search.module.css'
import dark from './SearchDark.module.css'
import {useAppContext} from "../../hook";
import {SearchForm} from "./SearchForm";
import {MoviesList} from "../MoviesContainer/MoviesList";

interface IProps extends PropsWithChildren {

}
const SearchContainer: FC<IProps> = () => {
    const {searchRes,theme}=useAppContext()
    return (
        <div className={theme?css.SearchMoviesContainer:searchRes.length==0?dark.SearchMoviesContainerEmpty:dark.SearchMoviesContainer}>
            <h2>Let`s find your movie!</h2>
            <SearchForm/>
            {searchRes&&<MoviesList movies={searchRes}/>}

        </div>
    );
};

export {SearchContainer};